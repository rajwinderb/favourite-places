import "./MainContent.css";
import PlaceItem from "./PlaceItem";

function MainContent(): JSX.Element {
  const places = [
    {
      id: 1,
      title: "Roman Forum",
      place: "Rome",
      country: "Italy",
      pictureUrl:
        "https://images.unsplash.com/photo-1558594144-7eeeaa34d22b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2836&q=80",
      picDescription: "Roman Forum views",
      mapsLink:
        "https://www.google.co.uk/maps/place/Roman+Forum/@41.8924623,12.4831363,17z/data=!3m1!4b1!4m5!3m4!1s0x132f61b383a9cdef:0xfa914007c0ec7de6!8m2!3d41.8924623!4d12.485325",
      description:
        "A glimps into the lives of the ancient Romans, with great views of the modern city.",
    },
    {
      id: 2,
      title: "Lake Windermere",
      place: "Lake District",
      country: "United Kingdom",
      pictureUrl:
        "https://images.unsplash.com/photo-1627990446827-f10df5ccd6fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80",
      picDescription: "Lake Windermere",
      mapsLink:
        "https://www.google.co.uk/maps/place/Windermere/@54.3473257,-3.0911614,11z/data=!3m1!4b1!4m5!3m4!1s0x487c95af688018cf:0xdf21a58b752a19fb!8m2!3d54.3739306!4d-2.9376445",
      description:
        "A great lake for watersports surrounded by hills and mountains.",
    },
    {
      id: 3,
      title: "Catedral de Sevilla",
      place: "Seville",
      country: "Spain",
      pictureUrl:
        "https://images.unsplash.com/photo-1605086943709-426105c258dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1742&q=80",
      picDescription: "Cathedral tower",
      mapsLink:
        "https://www.google.com/maps/place/Catedral+de+Sevilla/@37.3858247,-5.9931068,15z/data=!4m5!3m4!1s0x0:0xe49da05de71e6de5!8m2!3d37.3858247!4d-5.9931068",
      description:
        "Beatiful gothic style Cathedral where Christopher Columbus' tomb is located.",
    },
    {
      id: 4,
      title: "Acropolis of Athens",
      place: "Athens",
      country: "Greece",
      pictureUrl:
        "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
      picDescription: "view of the acropolis",
      mapsLink:
        "https://www.google.co.uk/maps/place/Acropolis+of+Athens/@37.971247,23.7170134,15.58z/data=!4m5!3m4!1s0x14a1bd1837f5acf3:0x5c97c042f5eb0df6!8m2!3d37.9715323!4d23.7257492",
      description:
        "How they flattened the top of the hill, who knows but it made a great place for the Temples.",
    },
  ];
  return (
    <section>
      {places.map((item) => (
        <PlaceItem
          title={item.title}
          place={item.place}
          country={item.country}
          pictureUrl={item.pictureUrl}
          picDescription={item.picDescription}
          mapsLink={item.mapsLink}
          description={item.description}
          key={item.id}
        />
      ))}
    </section>
  );
}

export default MainContent;
