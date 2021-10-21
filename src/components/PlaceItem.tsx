import "./PlaceItem.css";

interface PlaceItemProps {
  title: string;
  place: string;
  country: string;
  pictureUrl: string;
  picDescription: string;
  mapsLink: string;
  description: string;
}

function PlaceItem(props: PlaceItemProps): JSX.Element {
  return (
    <div id="place">
      <h2>{props.title}</h2>
      <img src={props.pictureUrl} alt={props.picDescription} />

      <h4>
        <a href={props.mapsLink}>
          {props.place}, {props.country}
        </a>
      </h4>
      <p>{props.description}</p>
    </div>
  );
}

export default PlaceItem;
