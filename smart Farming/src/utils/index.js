import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    "https://evnvwdwrdfzlusrvcfpd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2bnZ3ZHdyZGZ6bHVzcnZjZnBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAyNTQ2MzgsImV4cCI6MTk4NTgzMDYzOH0.LRf1wjMw-NoaXzTFpuEY5v2phYNTYRAVuiqSAPcSBWI"
  );
  
  export const createNewMessage = async (messages) => {
    try {
      const {data, error} = await supabase.from('messages').insert({
        ...messages,
      });
      if (data) {
        return data;
      }
      console.log(error);
      // return null;
    } catch (error) {
      console.log('error in createNewMessage>', error);
      throw error;
    }
  };