import { ReviewRepository } from "./ReviewRepository";
import { TourRepository } from "./TourRepo";

const repositories = {
    Tourdata :new TourRepository(),
    Reviewdata :new ReviewRepository()
}

export default repositories