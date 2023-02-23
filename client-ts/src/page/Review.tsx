import UserNavbar from "../components/UserNavbar";
import "../design/Review.css"

const ReviewPage = () => {
    
    return (
        <div>
            <UserNavbar />
            <div className="container mt-5 mb-5">
            <div className="row height d-flex justify-content-center align-items-center">
            <div className="col-md-7">
                <div className="card">
                <div className="p-3">
                    <h6>Comments</h6>
                </div>

                <div className="mt-3 d-flex flex-row align-items-center p-3 form-color gap-3">
                    <img src="https://i.imgur.com/zQZSWrt.jpg" width="50" className="rounded-circle mr-2" />
                    <input type="text" className="form-control" placeholder="Enter your comment..." />
                </div>

                <div className="mt-2">
                    <div className="d-flex flex-row p-3 gap-3">
                    <img src="https://i.imgur.com/zQZSWrt.jpg" width="40" height="40" className="rounded-circle mr-3" />
                    <div className="w-100">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-row align-items-center">
                            <span className="mr-2">Brian selter</span>
                            </div>
                            <small>12h ago</small>
                    </div>
                    <p className="text-justify comment-text mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <div className="d-flex flex-row user-feed">
                    </div>
                    </div>
                </div>


                <div className="d-flex flex-row p-3 gap-3">
                    <img src="https://i.imgur.com/3J8lTLm.jpg" width="40" height="40" className="rounded-circle mr-3" />
                    <div className="w-100">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-row align-items-center">
                            <span className="mr-2">Seltos Majito</span>
                            </div>
                            <small>2h ago</small>
                    </div>
                    <p className="text-justify comment-text mb-0">Tellus in hac habitasse platea dictumst vestibulum. Lectus nulla at volutpat diam ut venenatis tellus. Aliquam etiam erat velit scelerisque in dictum non consectetur. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Aliquam faucibus purus in massa.</p>
                    <div className="d-flex flex-row user-feed">
                    </div>
                    </div>
                </div>

                <div className="d-flex flex-row p-3 gap-3">
                    <img src="https://i.imgur.com/agRGhBc.jpg" width="40" height="40" className="rounded-circle mr-3" />
                    <div className="w-100">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-row align-items-center">
                            <span className="mr-2">Maria Santola</span>
                            </div>
                            <small>12h ago</small>
                    </div>
                    <p className="text-justify comment-text mb-0"> Id eu nisl nunc mi ipsum faucibus. Massa massa ultricies mi quis hendrerit dolor. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Urna condimentum mattis pellentesque id.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <div className="d-flex flex-row user-feed">
                    </div>
                    </div>
                </div>
                
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default ReviewPage;