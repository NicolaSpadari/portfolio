import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient(event);
	const { data: competences } = await client.from("portfolio_competences").select();
	const { data: assets } = await client.storage.from("portfolio-images").list("competences");

	const res = await Promise.all(competences?.map(async (competence: Competence) => {
		const assetName = assets?.find((asset) => `${competence.asset}.svg` === asset.name)?.name;
		competence.image = client.storage.from("portfolio-images").getPublicUrl(`competences/${assetName}`).data.publicUrl;
		return competence;
	}));

	return res as Competence[];
});
