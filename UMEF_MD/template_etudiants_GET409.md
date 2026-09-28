GET 409 — Atelier IA No-Code | Séance 6

**Templates Étudiants**

**CarteMarches.tsx + saisie-prix.tsx**

Remplacez chaque placeholder [EN MAJUSCULES] par les données de votre équipe

|  |
| --- |
| **🎯 Mode d'emploi**  1. Chaque placeholder est écrit entre crochets en MAJUSCULES : [NOM\_DU\_MARCHE], [LATITUDE], etc.  2. Remplacez TOUS les placeholders avant de coller le code dans VS Code.  3. Ne modifiez pas la structure du code — seulement les valeurs entre crochets.  4. Testez sur localhost avant de pousser sur GitHub. |

# **Fichier 1 — src/components/CarteMarches.tsx**

Ce composant affiche une carte interactive Leaflet avec les marchés de votre zone, la géolocalisation GPS et les distances.

|  |
| --- |
| **📋 Placeholders à remplacer dans ce fichier**  [NOM\_SECTION] → Titre de la section carte (ex: Marchés des Niayes)  [SOUS\_TITRE\_CARTE] → Sous-titre (ex: Trouvez les marchés près de chez vous)  [NOM\_DU\_MARCHE\_1] → Nom complet du marché 1 (ex: Marché de Sébikhotane)  [LATITUDE\_1] → Coordonnée latitude (ex: 14.7297)  [LONGITUDE\_1] → Coordonnée longitude (ex: -17.1064)  [PRODUIT\_1A] → Premier produit du marché (ex: Tomate ronde)  [PRODUIT\_1B] → Deuxième produit (ex: Oignon)  [PRODUIT\_1C] → Troisième produit (ex: Carotte)  → Répéter pour les marchés 2, 3, 4, 5, 6...  [COULEUR\_PIN] → Couleur hex des pins (ex: 1F5C2E pour vert)  [EMOJI\_PIN] → Emoji du pin (ex: 🌿 ou 🥬 ou 📍)  [TEXTE\_BOUTON\_GPS] → Label du bouton GPS (ex: Trouver les marchés proches) |

|  |
| --- |
| **🌍 Trouver les coordonnées GPS**  Aller sur maps.google.com → clic droit sur le lieu → les coordonnées s'affichent.  Format : latitude (nombre entre -90 et 90), longitude (nombre entre -180 et 180).  Exemple Dakar : latitude = 14.6928, longitude = -17.4467 |

## **Code complet — CarteMarches.tsx**

import { useEffect, useRef, useState } from "react";

**// ─── PLACEHOLDER : Données de vos marchés ────────────────────────────**

**// Remplacez chaque [VALEUR] par les données réelles de votre équipe**

const MARCHES: {

id: number; nom: string; lat: number;

lng: number; produits: string[]; distance: number | null

}[] = [

{

id: 1,

**nom: "[NOM\_DU\_MARCHE\_1]", // ← Remplacer**

**lat: [LATITUDE\_1], // ← ex: 14.7297**

**lng: [LONGITUDE\_1], // ← ex: -17.1064**

**produits: ["[PRODUIT\_1A]", "[PRODUIT\_1B]", "[PRODUIT\_1C]"], // ← Remplacer**

distance: null,

},

{

id: 2,

**nom: "[NOM\_DU\_MARCHE\_2]", // ← Remplacer**

**lat: [LATITUDE\_2], // ← Remplacer**

**lng: [LONGITUDE\_2], // ← Remplacer**

**produits: ["[PRODUIT\_2A]", "[PRODUIT\_2B]", "[PRODUIT\_2C]"], // ← Remplacer**

distance: null,

},

**// ... Ajouter autant de marchés que nécessaire**

];

// Calcul distance GPS (ne pas modifier)

function distanceKm(lat1: number, lng1: number, lat2: number, lng2: number) {

const R = 6371;

const dLat = ((lat2 - lat1) \* Math.PI) / 180;

const dLng = ((lng2 - lng1) \* Math.PI) / 180;

const a = Math.sin(dLat/2)\*\*2 + Math.cos((lat1\*Math.PI)/180) \*

Math.cos((lat2\*Math.PI)/180) \* Math.sin(dLng/2)\*\*2;

return R \* 2 \* Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

}

export default function CarteMarches() {

const mapRef = useRef<HTMLDivElement>(null);

const mapInstance = useRef<any>(null);

const [userPos, setUserPos] = useState<{lat:number;lng:number}|null>(null);

const [gpsStatus, setGpsStatus] = useState<"idle"|"loading"|"ok"|"error">("idle");

const [marches, setMarches] = useState(MARCHES);

useEffect(() => {

if (!mapRef.current || mapInstance.current) return;

import("leaflet").then((L) => {

delete (L.Icon.Default.prototype as any).\_getIconUrl;

L.Icon.Default.mergeOptions({

iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

});

**// ─── PLACEHOLDER : Centre de la carte ────────────────────────**

**// Coordonnées du centre géographique de votre zone**

**const map = L.map(mapRef.current!).setView([LATITUDE\_CENTRE, LONGITUDE\_CENTRE], ZOOM);**

**// Exemple : .setView([14.76, -17.18], 10) pour les Niayes**

mapInstance.current = map;

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {

attribution: "© OpenStreetMap contributors", maxZoom: 18,

}).addTo(map);

**// ─── PLACEHOLDER : Apparence des pins ────────────────────────**

const iconeMarche = L.divIcon({

className: "",

html: `<div style="

**background:#[COULEUR\_PIN]; /\* ← Remplacer couleur hex \*/**

color:white; border-radius:50%;

width:32px; height:32px;

display:flex; align-items:center; justify-content:center;

font-size:16px; border:3px solid white;

box-shadow:0 2px 6px rgba(0,0,0,0.3);

**">[EMOJI\_PIN]</div>`, /\* ← Remplacer emoji \*/**

iconSize: [32, 32], iconAnchor: [16, 16],

});

MARCHES.forEach((m) => {

const popup = `

<div style="font-family:Arial;min-width:180px;">

**<strong style="color:#[COULEUR\_PIN];">${m.nom}</strong>**

<hr style="margin:6px 0;"/>

<ul style="margin:0;padding-left:16px;font-size:12px;">

${m.produits.map(p => `<li>${p}</li>`).join('')}

</ul>

</div>`;

L.marker([m.lat, m.lng], { icon: iconeMarche })

.addTo(map).bindPopup(popup);

});

});

if (!document.getElementById("leaflet-css")) {

const link = document.createElement("link");

link.id = "leaflet-css"; link.rel = "stylesheet";

link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";

document.head.appendChild(link);

}

return () => { mapInstance.current?.remove(); mapInstance.current = null; };

}, []);

const detecterPosition = () => {

setGpsStatus("loading");

navigator.geolocation.getCurrentPosition((pos) => {

const { latitude: lat, longitude: lng } = pos.coords;

setUserPos({ lat, lng }); setGpsStatus("ok");

const avecDistance = MARCHES.map(m => ({

...m, distance: distanceKm(lat, lng, m.lat, m.lng)

})).sort((a,b) => a.distance - b.distance);

setMarches(avecDistance);

import("leaflet").then((L) => {

if (!mapInstance.current) return;

mapInstance.current.setView([lat, lng], 11);

const iconeUser = L.divIcon({

className: "",

html: `<div style="background:#1565C0;color:white;border-radius:50%;

width:28px;height:28px;display:flex;align-items:center;

justify-content:center;font-size:14px;border:3px solid white;">📍</div>`,

iconSize: [28,28], iconAnchor: [14,14],

});

L.marker([lat,lng],{icon:iconeUser}).addTo(mapInstance.current)

.bindPopup("<strong>Votre position</strong>").openPopup();

});

}, () => setGpsStatus("error"));

};

return (

<section className="py-16 px-4 bg-gray-50">

<div className="max-w-6xl mx-auto">

<div className="text-center mb-8">

**{/\* ─── PLACEHOLDER : Textes de la section ───────────────── \*/}**

<h2 className="text-3xl font-bold text-gray-900 mb-2">

**[EMOJI\_SECTION] [NOM\_SECTION] {/\* ← Remplacer \*/}**

</h2>

**<p className="text-gray-500 mb-6">[SOUS\_TITRE\_CARTE]</p> {/\* ← Remplacer \*/}**

{gpsStatus !== "ok" && (

<button onClick={detecterPosition} disabled={gpsStatus==="loading"}

**className="bg-[#[COULEUR\_PIN]] text-white px-6 py-3 rounded-full font-semibold">**

**{gpsStatus==="loading" ? "⏳ Détection..." : "[TEXTE\_BOUTON\_GPS]"}**

</button>

)}

{gpsStatus==="error" && (

<p className="text-red-500 text-sm mt-2">

Position non disponible — activez la géolocalisation.

</p>

)}

</div>

<div className="flex flex-col lg:flex-row gap-6">

<div className="lg:w-2/3">

<div ref={mapRef} style={{height:"420px",borderRadius:"12px",zIndex:0}}

className="w-full shadow-md border border-gray-200" />

</div>

<div className="lg:w-1/3 flex flex-col gap-3 overflow-y-auto max-h-[420px]">

{marches.map((m) => (

<div key={m.id} className="bg-white rounded-xl p-4 shadow-sm border

**border-gray-100 hover:border-[#[COULEUR\_PIN]] transition cursor-pointer"**

onClick={() => mapInstance.current?.setView([m.lat,m.lng],13)}>

<div className="flex items-start justify-between">

<p className="font-semibold text-gray-800 text-sm">{m.nom}</p>

{m.distance !== null && (

<span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">

{m.distance.toFixed(1)} km

</span>

)}

</div>

<p className="text-xs text-gray-400 mt-1">{m.produits.join(" · ")}</p>

</div>

))}

</div>

</div>

</div>

</section>

);

}

# **Fichier 2 — src/routes/saisie-prix.tsx**

Ce fichier gère la page de saisie des prix terrain et envoie les données au workflow Dify via webhook.

|  |
| --- |
| **📋 Placeholders à remplacer dans ce fichier**  [TITRE\_PAGE] → Titre de la page (ex: Saisie Prix Terrain)  [SOUS\_TITRE\_PAGE] → Description de la page (ex: Renseignez un prix observé sur le marché)  [LABEL\_CHAMP\_QUERY] → Label du champ question (ex: Votre question)  [PLACEHOLDER\_QUERY] → Texte indicatif du champ (ex: Quel est le prix de la tomate ?)  [TEXTE\_BOUTON] → Label du bouton submit (ex: Générer la fiche marché)  [TITRE\_RESULTAT] → Titre de la zone résultat (ex: FICHE MARCHÉ)  [CLE\_API\_DIFY] → Votre clé API Dify (ex: app-XXXXXXXXXXXXXXXX)  [URL\_WORKFLOW\_DIFY] → URL du workflow (ex: https://api.dify.ai/v1/workflows/run)  [COULEUR\_PRINCIPALE] → Couleur hex du bouton (ex: 1F5C2E) |

|  |
| --- |
| **🔑 Où trouver votre clé API Dify**  1. Ouvrir Dify → votre workflow → cliquer sur 'API' en haut à droite  2. Cliquer sur 'Clé API' → Générer une nouvelle clé  3. Copier la clé (format : app-XXXXXXXXXXXXXXXX)  4. La clé n'est affichée qu'une seule fois — la conserver en lieu sûr ! |

## **Code complet — saisie-prix.tsx**

import { useState } from "react";

import { createFileRoute } from "@tanstack/react-router";

**// ─── PLACEHOLDER : Configuration Dify ───────────────────────────────**

**const DIFY\_API\_KEY = "[CLE\_API\_DIFY]"; // ← Remplacer par votre clé**

**const DIFY\_API\_URL = "[URL\_WORKFLOW\_DIFY]"; // ← URL de votre workflow Dify**

export const Route = createFileRoute("/saisie-prix")({

component: SaisiePrix,

});

export default function SaisiePrix() {

const [query, setQuery] = useState("");

const [result, setResult] = useState("");

const [loading, setLoading] = useState(false);

const [error, setError] = useState("");

const handleSubmit = async () => {

if (!query.trim()) return;

setLoading(true); setError(""); setResult("");

try {

const response = await fetch(DIFY\_API\_URL, {

method: "POST",

headers: {

"Content-Type": "application/json",

Authorization: `Bearer ${DIFY\_API\_KEY}`,

},

body: JSON.stringify({

inputs: { query },

response\_mode: "blocking",

user: "etudiant-get409",

}),

});

if (!response.ok) throw new Error(`Erreur ${response.status}`);

const data = await response.json();

const output = data?.data?.outputs?.text || data?.data?.outputs?.result

|| JSON.stringify(data?.data?.outputs);

setResult(output);

} catch (err: any) {

setError(err.message || "Erreur de connexion à Dify");

} finally {

setLoading(false);

}

};

return (

<div className="min-h-screen bg-gray-50 py-12 px-4">

<div className="max-w-2xl mx-auto">

**{/\* ─── PLACEHOLDER : Textes de la page ─────────────────────── \*/}**

<h1 className="text-3xl font-bold text-gray-900 mb-2">

**[TITRE\_PAGE] {/\* ← Remplacer \*/}**

</h1>

<p className="text-gray-500 mb-8">

**[SOUS\_TITRE\_PAGE] {/\* ← Remplacer \*/}**

</p>

{/\* Champ de saisie \*/}

<div className="bg-white rounded-2xl shadow-sm p-6 mb-6">

<label className="block text-sm font-medium text-gray-700 mb-2">

**[LABEL\_CHAMP\_QUERY] {/\* ← Remplacer \*/}**

</label>

<textarea

value={query}

onChange={(e) => setQuery(e.target.value)}

**placeholder="[PLACEHOLDER\_QUERY]" {/\* ← Remplacer \*/}**

className="w-full border border-gray-200 rounded-xl p-3 text-sm

**focus:ring-2 focus:ring-[#[COULEUR\_PRINCIPALE]] outline-none"**

rows={3}

/>

<button

onClick={handleSubmit}

disabled={loading}

**className="mt-4 w-full bg-[#[COULEUR\_PRINCIPALE]] text-white py-3**

rounded-xl font-semibold hover:opacity-90 transition

disabled:opacity-50 disabled:cursor-not-allowed"

>

**{loading ? "⏳ Analyse en cours..." : "[TEXTE\_BOUTON]"} {/\* ← Remplacer \*/}**

</button>

</div>

{/\* Zone de résultat \*/}

{error && (

<div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">

<p className="text-red-600 text-sm">{error}</p>

</div>

)}

{result && (

<div className="bg-white rounded-2xl shadow-sm p-6">

**<p className="text-xs font-bold text-[#[COULEUR\_PRINCIPALE]] mb-3">**

**[TITRE\_RESULTAT] {/\* ← Remplacer \*/}**

</p>

<pre className="whitespace-pre-wrap text-sm text-gray-700">

{result}

</pre>

</div>

)}

</div>

</div>

);

}

# **Récapitulatif — Tous les placeholders**

| **Placeholder** | **Fichier** | **Exemple de valeur** |
| --- | --- | --- |
| [NOM\_DU\_MARCHE\_1] | CarteMarches.tsx | Marché de Sébikhotane |
| [LATITUDE\_1] | CarteMarches.tsx | 14.7297 |
| [LONGITUDE\_1] | CarteMarches.tsx | -17.1064 |
| [PRODUIT\_1A/1B/1C] | CarteMarches.tsx | Tomate ronde, Oignon, Carotte |
| [COULEUR\_PIN] | CarteMarches.tsx | 1F5C2E (vert foncé) |
| [EMOJI\_PIN] | CarteMarches.tsx | 🌿 ou 🥬 ou 🌱 |
| [NOM\_SECTION] | CarteMarches.tsx | Marchés des Niayes |
| [SOUS\_TITRE\_CARTE] | CarteMarches.tsx | Trouvez les marchés près de chez vous |
| [TEXTE\_BOUTON\_GPS] | CarteMarches.tsx | 📍 Trouver les marchés proches |
| [LATITUDE\_CENTRE] | CarteMarches.tsx | 14.76 |
| [LONGITUDE\_CENTRE] | CarteMarches.tsx | -17.18 |
| [ZOOM] | CarteMarches.tsx | 10 (région) ou 13 (ville) |
| [CLE\_API\_DIFY] | saisie-prix.tsx | app-XXXXXXXXXXXXXXXX |
| [URL\_WORKFLOW\_DIFY] | saisie-prix.tsx | https://api.dify.ai/v1/workflows/run |
| [TITRE\_PAGE] | saisie-prix.tsx | Saisie Prix Terrain |
| [SOUS\_TITRE\_PAGE] | saisie-prix.tsx | Renseignez un prix observé |
| [LABEL\_CHAMP\_QUERY] | saisie-prix.tsx | Votre question |
| [PLACEHOLDER\_QUERY] | saisie-prix.tsx | Quel est le prix de la tomate ? |
| [TEXTE\_BOUTON] | saisie-prix.tsx | Générer la fiche marché |
| [TITRE\_RESULTAT] | saisie-prix.tsx | FICHE MARCHÉ |
| [COULEUR\_PRINCIPALE] | saisie-prix.tsx | 1F5C2E |

|  |
| --- |
| **🌿 Projet pilote — NiayesBiz / GreenSprint**  Les valeurs ci-dessus sont celles du projet pilote NiayesBiz/GreenSprint.  URL live : niayes-fresh-connect.lovable.app  Chaque équipe adapte ces valeurs à son propre projet et sa zone géographique. |

Swiss UMEF University — Campus de Dakar | GET 409 Atelier IA No-Code | Juin 2026