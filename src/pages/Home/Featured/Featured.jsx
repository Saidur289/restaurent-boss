import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featuredItem bg-fixed my-20 text-white">
      <SectionTitle
        subHeading={"check it out"}
        heading={"Feature Item"}
      ></SectionTitle>
      <div className="md:flex justify-center   items-center pb-20 pt-12 px-36 bg-opacity-60 bg-slate-500">
      <div>
        <img src={featuredImg} alt="" />
      </div>
      <div className="md:ml-20 text-left">
        <p>Aug 20, 2026</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          perferendis minus excepturi eius mollitia distinctio, quod sunt qui
          illum nam nesciunt laborum id sit exercitationem consectetur ab nobis
          est aspernatur incidunt! Vel voluptatibus autem cupiditate iure
          repellendus, voluptates in neque ex reprehenderit ipsum repudiandae
          velit deleniti necessitatibus tempore beatae exercitationem.
        </p>
        <button className="btn btn-outline border-0 text-white border-b-white border-b-4 mt-4">
          Order Now
        </button>
      </div>
      </div>
    </div>
  );
};

export default Featured;
