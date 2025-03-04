
export default function LinksHome() {
    return (
        <div className="grid grid-cols-3 gap-4 max-w-[1200px] m-auto py-8">
            <div className="p-4">
                <h4 className="text-lg font-semibold mb-3">Assistance</h4>
                <ul className="flex flex-col gap-3">
                    <li><a href="#" className="hover:underline">Centre d'aide</a></li>
                    <li><a href="#" className="hover:underline">AirCover</a></li>
                    <li><a href="#" className="hover:underline">Lutte contre la descrimination</a></li>
                    <li><a href="#" className="hover:underline">Assistance handicape</a></li>
                    <li><a href="#" className="hover:underline">Options d'annulation</a></li>
                </ul>
            </div>

            <div className="p-4">
                <h4 className="text-lg font-semibold mb-3">Accueil de voyages</h4>
                <ul className="flex flex-col gap-3">
                    <li><a href="#" className="hover:underline">J'ai un problème de voisinages</a></li>
                    <li><a href="#" className="hover:underline">Mettez votre logement sur Airbnb</a></li>
                    <li><a href="#" className="hover:underline">AirCover pour les hôtes</a></li>
                    <li><a href="#" className="hover:underline">Ressources pour les hôtes</a></li>
                    <li><a href="#" className="hover:underline">Forum de la communauté</a></li>
                </ul>
            </div>


            <div className="p-4">
                <h4 className="text-lg font-semibold mb-3">Airbnb</h4>
                <ul className="flex flex-col gap-3">
                    <li><a href="#" className="hover:underline">Newsroom</a></li>
                    <li><a href="#" className="hover:underline">AirCover</a></li>
                    <li><a href="#" className="hover:underline">Nouvelle fonctionnalités</a></li>
                    <li><a href="#" className="hover:underline">Carrières</a></li>
                    <li><a href="#" className="hover:underline">Investisseurs</a></li>
                </ul>
            </div>
        </div>    
    )
}
