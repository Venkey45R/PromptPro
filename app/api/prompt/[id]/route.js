import { ConnectToDB } from "@utils/database";
import Prompt from "@models/prompt";

//Read
export const GET = async (request, {params}) =>{
    try {
        await ConnectToDB();
        const prompt = await Prompt.findById(params.id).populate('creator');
        if(!prompt){
            return new Response ("Prompt not found", {status: 404})
        }
        return new Response(JSON.stringify(prompt), {status: 200})
    } catch (error) {
        return new Response(error, {status: 500})
    }
}

//update
export const PATCH = async (request, {params}) =>{
    const {prompt, tag} = await request.json();
    try {
        await ConnectToDB();
        const existingPrompt = await Prompt.findById(params.id);
        if(!existingPrompt){
            return new Response("Prompt not found", {status: 404});
        }
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();

        return new Response(JSON.stringify(existingPrompt), {status: 200})
    } catch (error) {
        return new Respone("Failed to update prompt", {status: 500})
    }
}

//delete
export const DELETE = async(request, {params}) =>{
    try {
        await ConnectToDB();
        await Prompt.findByIdAndDelete(params.id);
        return new Response("Deleted successfully", {status: 200})
    } catch (error) {
        return new Response("Failed to delete", {status: 500})
    }
}