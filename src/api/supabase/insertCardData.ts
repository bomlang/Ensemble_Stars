import { supabase } from ".";
import { EnsembleCardData } from "../../types/EnstarCardDataType";

export const insertCardData = async (cardData: EnsembleCardData) => {
  try {
    const { data, error } = await supabase
      .from("ensemble_cards")
      .insert([cardData])
      .select();

    if (error) {
      console.error("Insert_data Error: ", error.message);
    }
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        "An unexpected error occurred while inserting data:",
        error.message
      );
      throw error;
    } else {
      // SupabaseError 타입이 아닌 다른 예외 처리
      console.error("An unexpected non-Supabase error occurred:", error);
      throw new Error("Unexpected error occurred");
    }
  }
};
