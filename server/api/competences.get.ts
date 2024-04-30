import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient(event);
	const { data } = await client.from("portfolio_competences").select();

	return data as Competence[];
});
