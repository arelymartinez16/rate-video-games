"use server"

import { AuthError } from "next-auth";
import { signIn, getUser } from "@/auth";
import { SignupFormSchema } from "./definitions";
import supabase from "./utils/supabase";
import bcrypt from "bcrypt";

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

export async function fetchReviews(gameId) {
  try {
    const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .eq('game_id', gameId)
  
    if (error) {
      throw new Error('Failed to fetch reviews');
    }

    return data;
  } catch (error) {
    console.error('Failed to fetch reviews:', error);
  }
}

export async function addReview(gameId, reviewText) {
  try {
    const { data, error } = await supabase
      .from('reviews')
      .insert([{ game_id: gameId, content: reviewText }]);

    if (error) {
      throw new Error('Failed to add review');
    }

    return data[0];
  } catch (error) {
    console.error('Failed to add review:', error);
  }
}

export async function fetchGames() {
  try {
    const response = await fetch(`${API_URL}/games?key=${API_KEY}`);
    const data = await response.json();
    // await addGamesToDatabase(data.results);
    return data;
  } catch (error) {
    console.error('Failed to fetch games:', error);
  }
}

async function addGamesToDatabase(games) {
  try {
    const { data, error } = await supabase
      .from('games')
      .insert(games.map(game => ({
        id: game.id,
        name: game.name,
        description: game.description,
        background_image: game.background_image,
        rating: game.rating,
      })));
    if (error) {
      console.error('Failed to add games to database:', error);
    }
    return data;
  } catch (error) {
    console.error('Failed to add games to database:', error);
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