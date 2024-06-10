import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";
console.log(OPENAI_KEY)

const openai = new OpenAI({
    apiKey: OPENAI_KEY,
    dangerouslyAllowBrowser: true
  });

  export default openai;