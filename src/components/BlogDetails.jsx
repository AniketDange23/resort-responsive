import { useParams } from "react-router-dom";
import blogsData from "./blogsData.js";

const BlogDetails = () => {
  const { index } = useParams();
  const blog = blogsData[parseInt(index)];

  if (!blog) {
    return <div className='blog-details'>Blog not found</div>;
  }

  const {
    title,
    date,
    image,
    description,
    subTitle1,
    content1,
    content2,
    content3,
    subTitle2,
    DescriptionSubTitle2,
    content4,
    content5,
    content6,
    subTitle3,
    content7,
    content8,
  } = blog;

  return (
    <div className='blog-details container py-5 mt'>
      <div className='blog-content'>
        <h2 className='title'>{title}</h2>
        <p>Date: {date}</p>
        <div className=' text-center'>
          <img src={image} alt='Blog Cover' className="w-75 h-100" />
        </div>
        <h6 className='py-4'>{description}
        </h6>
        <h3>{subTitle1}</h3>
        <p>{content1}</p>
        <p>{content2}</p>
        <p>{content3}</p>
        <h3>{subTitle2}</h3>
        <p>{DescriptionSubTitle2}</p>
        <p>{content4}</p>
        <p>{content5}</p>
        <p>{content6}</p>
        <h3>{subTitle3}</h3>
        <p>{content7}</p>
        <p>{content8}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
