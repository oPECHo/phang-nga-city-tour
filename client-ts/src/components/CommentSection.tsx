import { ChangeEvent, useState } from 'react';
import { format } from 'date-fns';
import { Rating, Typography } from '@mui/material';

import Repo from '../repositories';
import Postreview from '../models/postreview';
import Tours from '../models/tour';

import { userData } from '../helper';
import { useLocation } from 'react-router-dom';

interface Props {
    tourdata: Tours;
    user: {
        username: string;
    };
}

function CommentSection(props: Props) {
    const [commentText, setCommentText] = useState('');
    const [scoreReview, setScoreReview] = useState(1);
    const [showRating, setShowRating] = useState(true); // flag to show/hide rating component
    const username = userData();

    const handleCommentText = (e: ChangeEvent<HTMLInputElement>) => {
        setCommentText(e.target.value);
    };

    const handleScoreReview = (e: ChangeEvent<{}>, value: number | null) => {
        if (value !== null) {
            setScoreReview(value);
            setShowRating(false); // hide rating component when user submits a rating
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await Repo.Reviewdata.createReview(newReview);
        window.location.reload();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
        }
    };

    const today = new Date();
    const formattedDate = format(today, 'yyyy-MM-dd');

    const location = useLocation();
    const tourId = new URLSearchParams(location.search).get('tour_id');
    const tourName = new URLSearchParams(location.search).get('tour_name');

    const newReview: Postreview = {
        data: {
            id_tour: tourId as string,
            name_tour: tourName as string,
            author: username.username,
            user: username.username,
            comment: commentText,
            score: scoreReview,
            Date: formattedDate,
        },
    };

    return (
        <form className="mt-3 d-flex flex-row align-items-center p-3 form-color gap-3" onSubmit={handleSubmit}>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" width="50" className="rounded-circle mr-2" />
            {showRating ? (
                <div>
                    <Typography component="legend"> ..ให้คะแนนทัวร์นี้ </Typography>
                    <Rating name="score" value={scoreReview} onChange={handleScoreReview} size="large" />
                </div>
            ) : (
                <>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="ความคิดเห็นของคุณ..."
                        value={commentText}
                        onChange={handleCommentText}
                        onKeyDown={handleKeyDown}
                        required
                    />
                    <button type="submit" className="btn btn-primary">
                        ตกลง
                    </button>
                </>
            )}
        </form>
    );
}

export default CommentSection;
