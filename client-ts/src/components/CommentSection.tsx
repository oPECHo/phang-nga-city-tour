import { ChangeEvent, useState } from 'react';
import { format } from 'date-fns';

import Repo from '../repositories';
import Postreview from '../models/postreview';
import Tours from '../models/tour';


interface Props {
    tourdata: Tours
}

function CommentSection(props: Props) {
    const [commentText, setCommentText] = useState('');

    const handleCommentText = (e: ChangeEvent<HTMLInputElement>) => {
        setCommentText(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await Repo.Reviewdata.createReview(newReview)
        window.location.reload()
    }

    const today = new Date();
    const formattedDate = format(today, 'yyyy-MM-dd');

    const newReview: Postreview = {
        data: {
            comment: commentText,
            date: formattedDate
        }
    }


    return (
        <div className="mt-3 d-flex flex-row align-items-center p-3 form-color gap-3">
            <img src="https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_960_720.png" width="50" className="rounded-circle mr-2" />
            <input  type="text"
                    className="form-control"
                    placeholder="Enter your comment..."
                    value={commentText}
                    onChange={handleCommentText}
                    required
            />
        </div>
    );
}

export default CommentSection;
