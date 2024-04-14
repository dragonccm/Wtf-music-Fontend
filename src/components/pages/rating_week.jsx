import { useState ,useEffect} from "react";
import Recommended from "../card/Recommended"
import '../../css/rating_week.scss'
import { useSelector, useDispatch } from "react-redux";
import { fetchRating } from "../../redux/slide/ratingSlice";
import { useParams } from 'react-router-dom';
import Loading from "../sideNavigation/mascot_animation";
const Rating_week = () => {

    let { id } = useParams();
    const [area, setArea] = useState(id)

    const handleChange = (e) => {
        console.log(e.target.value); // In ra giá trị của radio button được chọn
        setArea(e.target.value)
    }
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRating());
        console.log('oooooooooooooooooooooooooooooooooooo')
        console.log(dataRating)
        console.log(dataRating.weekChart)
    }, [dispatch]);
    const dataRating = useSelector((state) => {
      return state.rating.dataRating;
    }); 
    if (Object.keys(dataRating).length === 0 ||  dataRating.weekChart === "null" || dataRating.weekChart === "undefined") {
      
        return <div className="main_banner"><Loading/></div>;
        
    }
    console.log('oooooooooooooooooooooooooooooooooooo')
        console.log(dataRating)
        console.log(dataRating.weekChart)

    return (
        <div className="rating_week">
            <h1>Bảng xếp hạng tuần</h1>
            <div className="radio-inputs">
                <label>
                    <input
                        className="radio-input "
                        type="radio"
                        name="engine"
                        value='vn'
                        checked={area === 'vn'}
                        onChange={(e) => handleChange(e)}
                    />
                    <span className="radio-tile ">
                        <span className="radio-icon">
                            Việt Nam
                        </span>
                    </span>
                </label>

                <label>
                    <input
                        className="radio-input "
                        type="radio"
                        name="engine"
                        value='us-uk'
                        checked={area === 'us-uk'}

                        onChange={(e) => handleChange(e)}

                    />
                    <span className="radio-tile ">
                        <span className="radio-icon">
                            US-UK
                        </span>
                    </span>
                </label>

                <label>
                    <input
                        className="radio-input "
                        type="radio"
                        name="engine"
                        value='korea'
                        checked={area === 'korea'}

                        onChange={(e) => handleChange(e)}

                    />
                    <span className="radio-tile ">
                        <span className="radio-icon">
                            K-Pop
                        </span>
                    </span>
                </label>
            </div>
            <Recommended
            datas={area === 'vn' ? dataRating.weekChart.vn.items : area === 'us-uk' ? dataRating.weekChart.us.items : dataRating.weekChart.korea.items}
            type={""}
            describe={""}
            maxItemsToShow="100"
          />
        </div>
    )
}
export default Rating_week