export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();
	const apiCocktailsPath: string = config.public.apiCocktailsUrl;

	const apiFetch = $fetch.create({
		baseURL: apiCocktailsPath
	})

	return {
		provide: {
			apiCocktails: apiFetch
		}
	}
})
