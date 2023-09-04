import { useEffect, useState } from "react";
import PhotosUploader from "./3-PhotosUploader";
import PerksLables from "./2-PerksLables";
import axios from "axios";
import AccountNav from "./5-AccountNav";
import { Navigate, useParams } from "react-router";

export default function PlaceForm(){
  const {id} = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [price, setPrice] = useState(100);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
      if (!id) {
        return;
      }

      axios.get('/places/'+id).then(response => {
        const {data} = response;
        setTitle(data.title);
        setAddress(data.address);
        setAddedPhotos(data.photos);
        setDescription(data.description);
        setPerks(data.perks);
        setExtraInfo(data.extraInfo);
        setCheckIn(data.checkIn);
        setCheckOut(data.checkOut);
        setMaxGuests(data.maxGuests);
        setPrice(data.price);
      })

  }, [id])




  async function savePlace(ev){
    ev.preventDefault();
    const placeData = {title, address, description, addedPhotos, perks, extraInfo, checkIn, checkOut, maxGuests, price};

    if(id) {
      //update
      await axios.put('/places', {id, ...placeData});
      setRedirect(true);
    } else {
      await axios.post('/places', placeData);
      setRedirect(true);
    }

    
  }

  if (redirect) {
    return <Navigate to={'/account/accommodations'} />
  }

  return (
    <div>
      <AccountNav />

          <form onSubmit={savePlace}>
            <h2 className="text-xl mt-4">Title</h2>
            <input
              type="text"
              placeholder="Title, for example, 'My Lovely Apartment"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
            />

            <h2 className="text-xl mt-4">Address</h2>
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(ev) => setAddress(ev.target.value)}
            />

            <h2 className="text-xl mt-4">Photos</h2>
            <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>

            <h2 className="text-xl mt-4">Description</h2>
            <textarea
              placeholder="Description"
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />

            <h2 className="text-xl mt-4">Perks</h2>
            <div className="gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              <PerksLables selected={perks} onChange={setPerks} />
            </div>

            <h2 className="text-xl mt-4">Extra Info</h2>
            <textarea
              placeholder="house rules, etc"
              value={extraInfo}
              onChange={(ev) => setExtraInfo(ev.target.value)}
            />

            <h2 className="text-xl mt-4">Check in & times</h2>
            <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
              <div>
                <h3 className="mt-2 -mb-1">Check In Time</h3>
                <input
                  type="text"
                  placeholder="14:00"
                  value={checkIn}
                  onChange={(ev) => setCheckIn(ev.target.value)}
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Check Out Time</h3>
                <input
                  type="text"
                  value={checkOut}
                  onChange={(ev) => setCheckOut(ev.target.value)}
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Max Guests</h3>
                <input
                  type="number"
                  value={maxGuests}
                  onChange={(ev) => setMaxGuests(ev.target.value)}
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Price per Night</h3>
                <input
                  type="number"
                  value={price}
                  onChange={(ev) => setPrice(ev.target.value)}
                />
              </div>
            </div>

            <button className="primary my-4"> Save</button>
          </form>
        </div>
  )
}