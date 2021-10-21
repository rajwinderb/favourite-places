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
    <>
      <img src={props.pictureUrl} alt={props.picDescription} />
      <h3>{props.title}</h3>
      <h4>
        <a href={props.mapsLink}>
          {props.place}, {props.country}
        </a>
      </h4>
      <p>{props.description}</p>
    </>
  );
}

export default PlaceItem;
