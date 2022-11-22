import Tag from './Tag';
import '../styles/Tags.css';

function Tags({ tags }) {
   return (
      <div className="ks-tag-container">
         {tags.map((tag, index) => (
            <Tag content={tag} key={index} />
         ))}
      </div>
   );
}

export default Tags;
