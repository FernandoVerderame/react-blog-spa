import postCardStyle from './PostCard.module.scss';
import Button from '../Button/Button.jsx';

const PostCard = ({ title, content, image, category, tags }) => {

    const tagColors = {
        html: '#E4552E',
        css: '#1D81C0',
        js: '#FFB92C',
        php: '#556096'
    };

    const abstract = () => {
        const abs = content.slice(0, 60);
        return abs + '...';
    }

    return (
        <>
            <div className={postCardStyle.postCard}>
                <div className={postCardStyle.image}>
                    <img src={image ? image : "https://placehold.co/600x400"} alt={title} className={postCardStyle.img} />
                    {/* Post Category */}
                    {category &&
                        <div className={postCardStyle.category}>
                            <strong>{category}</strong>
                        </div>
                    }
                </div>

                <div className={postCardStyle.bottom}>
                    <h3 className="h5">{title}</h3>
                    <p className={postCardStyle.paragraph}>{abstract()}</p>
                    <div className={postCardStyle.dFlex}>
                        {/* Button card */}
                        <Button />

                        {/* Post Tags */}
                        {tags.length > 0 ? (
                            <div>
                                <ul className={postCardStyle.tags}>
                                    {tags.map((tag, i) => (
                                        <li key={`tag${i}`} style={{ backgroundColor: tagColors[tag.name] || '#ccc' }} className={postCardStyle.postBadge}>{tag.name}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <p>Nessun tag</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostCard;
