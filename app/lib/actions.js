"use server"

import { AuthError } from "next-auth";
import { signIn, getUser } from "@/auth";
import { SignupFormSchema } from "./definitions";
import supabase from "./utils/supabase";
import bcrypt from "bcrypt";

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

export async function fetchGames() {
  try {
    const response = await fetch(`${API_URL}/games?key=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch games:', error);
  }
}

export async function fetchGame(id) {
  try {
    const response = await fetch(`${API_URL}/games/${id}?key=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch game:', error);
  }
}

export async function authenticate(prevState, formData) {
    try {
      await signIn("credentials", formData);
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case "CredentialsSignin":
            return "Invalid credentials.";
          default:
            return "Something went wrong.";
        }
      }
      throw error;
    }
}

export async function signup(prevState, formData) {
  try {
    // Ensure formData is an instance of FormData
    if (!(formData instanceof FormData)) {
      return {
        errors: {
          name: ['Invalid form submission'],
          email: ['Invalid form submission'],
          password: ['Invalid form submission']
        }
      };
    }

    // Validate form fields
    const validatedFields = SignupFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    });
   
    // If any form fields are invalid, return early
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }
   
    // Destructure validated data
    const { name, email, password } = validatedFields.data;

    // Check if user already exists using your existing getUser function
    // const existingUser = await getUser(email);

    // if (existingUser) {
    //   return {
    //     errors: {
    //       email: ['An account with this email already exists.']
    //     }
    //   };
    // }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    const { data, error } = await supabase
      .from("users")
      .insert([{ name, email, password: hashedPassword }]);
    
    if (error) {
      console.error('Supabase insert error:', error);
      return {
        errors: {
          name: ['An error occurred while creating your account.']
        }
      }
    }

    // Return success message
    return {
      message: 'User created successfully',
    };

  } catch (error) {
    console.error('Unexpected signup error:', error);
    return {
      errors: {
        name: ['An unexpected error occurred.']
      }
    }
  }
}

// export async function signup(prevState, formData) {
//   // Ensure formData is an instance of FormData
//   // let formdata;
//   // if (!(formData instanceof FormData)) {
//   //   // console.log('formData', formData) 
//   //   // throw new TypeError("Expected formData to be an instance of FormData");
//   //   // formdata = new FormData(formData);
//   // }

//   if (!(formData instanceof FormData)) {
//     // If it's not, try to convert it or handle the error
//     if (typeof formData === 'object' && formData !== null) {
//       formData = new FormData();
//       for (const [key, value] of Object.entries(formData)) {
//         formData.append(key, value);
//       }
//     } else {
//       return {
//         message: 'Invalid form data submitted.'
//       };
//     }
//   }

//   // Validate form fields
//   const validatedFields = SignupFormSchema.safeParse({
//     name: formData.get('name'),
//     email: formData.get('email'),
//     password: formData.get('password'),
//   })
 
//   // If any form fields are invalid, return early
//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//     }
//   }
 
//   // Call the provider or db to create a user...
//   const { name, email, password } = validatedFields.data

//   const hashedPassword = await bcrypt.hash(password, 10);

//   const { data, error } = await supabase
//     .from("users")
//     .insert([{ name, email, password: hashedPassword }]);

//     if (error) {
//       console.error('Supabase insert error:', error);
//       return {
//         message: error.message || 'An error occurred while creating your account.',
//       }
//     }
  
//     const user = data[0]
 
//     if (!user) {
//       return {
//         message: 'An error occurred while creating your account.',
//       }
//     }

//     return {
//       message: 'User created successfully',
//     };
// }