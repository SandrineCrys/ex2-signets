export default function Dossier({id, titre, couleur, dateModif}) {
  return (
    <article className="Dossier">
      <div className="couverture">
        <span className="deplacer">Déplacer</span>
        <img src={`images-dossiers/${id}.png`} alt={titre}/>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>{dateModif}</p>
      </div>
      <button>Modifier</button>
    </article>
  );
}