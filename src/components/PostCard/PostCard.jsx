import postCardStyle from './PostCard.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const PostCard = ({ title, content = "", image, category, tags = [], slug, isShow }) => {
    const navigate = useNavigate();

    const abstract = () => {
        if (typeof content === 'string') {
            const abs = content.slice(0, 60);
            return abs + '...';
        }
        return '';
    };

    return (
        <div className={postCardStyle.postCard}>
            <div className={postCardStyle.image}>
                <img src={image ? image : "https://placehold.co/600x400"} alt={title} className={postCardStyle.img} />
                {category && (
                    <div className={postCardStyle.category}>
                        <strong>{category?.name}</strong>
                    </div>
                )}
            </div>

            <div className={postCardStyle.bottom}>
                <h3 className="h5">{title}</h3>
                <p className={postCardStyle.paragraph}>{abstract()}</p>
                <div className={postCardStyle.dFlex}>
                    {isShow ? (
                        <button
                            onClick={() => { navigate(-1) }}
                            className={postCardStyle.btn}
                        >
                            Torna indietro
                        </button>
                    ) : (
                        <Link to={`/posts/${slug}`} className={postCardStyle.btn}>
                            Leggi di più
                        </Link>
                    )}

                    {Array.isArray(tags) && tags.length > 0 ? (
                        <div>
                            <ul className={postCardStyle.tags}>
                                {tags.map((tag, i) => (
                                    <li key={`tag-${i}`} style={{ backgroundColor: '#ccc' }} className={postCardStyle.postBadge}>
                                        {tag.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <p>Nessun tag</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PostCard;
