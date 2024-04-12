import { useState } from 'react';
import '../../css/col_3_layout.scss';
import Col3Layout from "./col_3_layout";





const Release = ({ data }) => {
    const [area, setArea] = useState('all')

    const handleChange = (e) => {; // In ra giá trị của radio button được chọn
        setArea(e.target.value)
    }
    return (
        data && Object.keys(data).length > 0 &&
        <>
            <h1>Mới phát hành</h1>
            <div className="radio-inputs">
                <label>
                    <input
                        className="radio-input "
                        type="radio"
                        name="engine"
                        value='all'
                        checked={area === 'all'}
                        onChange={(e) => handleChange(e)}
                    />
                    <span className="radio-tile ">
                        <span className="radio-icon">
                            Tất cả
                        </span>
                    </span>
                </label>

                <label>
                    <input
                        className="radio-input "
                        type="radio"
                        name="engine"
                        value='vPop'
                        checked={area === 'vPop'}

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
                        value='others'
                        checked={area === 'others'}

                        onChange={(e) => handleChange(e)}

                    />
                    <span className="radio-tile ">
                        <span className="radio-icon">
                            Quốc tế
                        </span>
                    </span>
                </label>
            </div>

            <Col3Layout data={area === 'all' ? data.all : area === 'vPop' ? data.vPop : data.others} />
        </>
    );
};

export default Release;