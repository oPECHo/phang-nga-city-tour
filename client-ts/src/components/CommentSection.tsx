import { ChangeEvent, useState } from 'react';
import { format } from 'date-fns';
import { Rating } from '@mui/material';

import Repo from '../repositories';
import Postreview from '../models/postreview';
import Tours from '../models/tour';

import { userData } from '../helper';

interface Props {
    tourdata : Tours
    user : {
        username : string
    }
}

function CommentSection(props: Props) {
    const [commentText, setCommentText] = useState('');
    const [scoreReview, setScoreReview] = useState(1);
    const tour_data = props.tourdata ? props.tourdata : null
    const username = userData();
    const user = props.user

    const handleCommentText = (e : ChangeEvent<HTMLInputElement>) => {
        setCommentText(e.target.value);
    }

    const handleScoreReview = (e : ChangeEvent<{}>, value : number | null) => {
        if (value !== null) {
            setScoreReview(value);
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await Repo.Reviewdata.createReview(newReview)
        window.location.reload()
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
        }
    }

    const today = new Date();
    const formattedDate = format(today, 'yyyy-MM-dd');

    const newReview : Postreview = {
        data: {
            tour_id : tour_data?.id as number,
            tour_name: tour_data?.attributes.title as string,
            author: username.username,
            user: username.username,
            comment : commentText,
            score : scoreReview,
            Date: formattedDate
        }
    }

    return (
        <form className="mt-3 d-flex flex-row align-items-center p-3 form-color gap-3" onSubmit={handleSubmit}>
            <img src="https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_960_720.png" width="50" className="rounded-circle mr-2" />
            <Rating
                name="score"
                value={scoreReview}
                onChange={handleScoreReview}
                size="large"
            />
            <input
                type="text"
                className="form-control"
                placeholder="Enter your comment..."
                value={commentText}
                onChange={handleCommentText}
                onKeyDown={handleKeyDown}
                required
            />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default CommentSection;
