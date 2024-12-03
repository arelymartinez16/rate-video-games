# Game Insider

## Description

The motivation behind this project was to create a comprehensive platform for video game enthusiasts to find in-depth reviews and ratings of the latest games. I built this project to provide a centralized hub where gamers can access detailed reviews, ratings, and insights about various video games. My goal was to create a community-driven platform where users can share their experiences, leave reviews, and engage with other gamers. By offering honest and thorough reviews, I aim to help gamers discover new games and avoid potential disappointments.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/arelymartinez16/rate-video-games.git
   ```

2. Navigate to the project directory:

   ```bash
   cd rate-video-games
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up your environment variables:

   - Create a `.env.local` file in the `root` directory with your API keys and database credentials.
   - Example `.env.local`:

     ```env
      NEXT_PUBLIC_SUPABASE_URL=""
      NEXT_PUBLIC_SUPABASE_ANON_KEY=""
      NEXTAUTH_SECRET=""

      API_URL="https://api.rawg.io/api"
      API_KEY=""
     ```

## Features

- Community Feedback: Users can leave their own ratings and reviews, sharing their experiences and opinions with the community.
- Secure Login: Users can securely sign up and log in using their email and password.
- Extensive Library: Access a vast database of video games across various genres and platforms.
