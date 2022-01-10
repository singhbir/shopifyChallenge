import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../Components/Card";
import Loader from "../../Components/Loader";
import NasaPage from "./nasaPage";
import { loadingHomePage } from "./redux";
import { successLike } from "./redux/likeslice";
import Navbar from "../../Components/Navbar";
import PrimaryButton from "../../Components/PrimaryButton";
import "../../App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface ShowCardsProps {
  data: any;
  likes: any;
  handleLikes: Function;
  handleDisLike: Function;
}

const ShowCards: React.FC<ShowCardsProps> = ({
  data,
  likes,
  handleLikes,
  handleDisLike,
}) => {
  return data?.length > 0 ? (
    data?.map((item: any) => {
      const { id, img_src, camera, earth_date, rover } = item;
      const likeStatus =
        likes.filter((sublike: any) => sublike.id == id).length > 0;
      return (
        <div data-aos="fade-up" data-aos-duration="20">
          <Card
            key={id}
            imageUrl={img_src}
            rovername={rover.name}
            camera={camera.name}
            earthdate={earth_date}
            handleLike={() => handleLikes(item)}
            handledislike={() => handleDisLike(id)}
            isLike={likeStatus}
          />
        </div>
      );
    })
  ) : (
    <h2 className="text-5xl text-red-400"> Sorry No data Found</h2>
  );
};
const Home = () => {
  const dispatch = useDispatch();
  const cardData = useSelector((state: any) => state.homepage.data);
  const loading = useSelector((state: any) => state.homepage.loading);
  const error = useSelector((state: any) => state.homepage.error);
  const likes = useSelector((state: any) => state.likes.data);
  const [dataBtnSelected, setDataBtnSelected] = React.useState("mars");
  const [startDate, setStartDate] = React.useState(new Date(2015, 3, 15));

  React.useEffect(() => {
    dispatch(loadingHomePage(startDate.toISOString().split("T")[0]));
  }, []);

  React.useEffect(() => {
    dispatch(loadingHomePage(startDate.toISOString().split("T")[0]));
  }, [startDate]);

  const handleLikes = (cardData: any) => {
    const prevLikesData = [...likes];
    const newLikesData = Array.from(new Set([...prevLikesData, cardData]));
    dispatch(successLike(newLikesData));
  };

  const handleDisLike = (id: number) => {
    const prevLikesData = [...likes];
    const finalRemoveData = prevLikesData.filter((like: any) => like.id !== id);
    dispatch(successLike(finalRemoveData));
  };

  const showData = {
    mars: {
      data: cardData?.photos,
      title: "Mars Data",
    },
    liked: {
      data: likes,
      title: "Your Likes",
    },
  } as any;

  return (
    <div>
      <Navbar />
      <NasaPage />
      <div className=" w-full flex justify-center items-center my-5">
        <PrimaryButton
          title="Mars Data"
          onBtnClick={() => setDataBtnSelected("mars")}
        />

        <PrimaryButton
          title="Liked Pics"
          className="mx-2"
          onBtnClick={() => setDataBtnSelected("liked")}
        />
        <div className="border-2 border-black bg-white hover:cursor-pointer rounded">
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
          />
        </div>
      </div>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div>
              <h3 className="nasa-font text-5xl my-5">
                {showData[dataBtnSelected].title}
              </h3>
            </div>
            <div className="flex flex-wrap justify-evenly">
              <ShowCards
                data={showData[dataBtnSelected].data}
                likes={likes}
                handleLikes={handleLikes}
                handleDisLike={handleDisLike}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
