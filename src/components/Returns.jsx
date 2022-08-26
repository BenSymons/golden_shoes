import { BiHelpCircle } from "react-icons/bi"
import { useState } from "react"

const Returns = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <button
                className="search-button"
                onClick={() => setVisible((prev) => !prev)}
            >
                <BiHelpCircle fontSize="24px" />
                <p>Our Returns Policy</p>
            </button>
            {visible && <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius lorem justo,
                vitae vulputate tortor consequat et. Nullam ullamcorper mauris a libero convallis efficitur.
                Ut sodales elit dui, quis maximus sapien vulputate et. Aliquam maximus urna a risus consectetur
                fermentum. Maecenas diam elit, eleifend sed fermentum a, hendrerit in nibh. Fusce nec tortor
                gravida, viverra lectus mollis, vulputate eros. Curabitur mollis sem neque, id pellentesque
                eros dapibus id. Aliquam erat volutpat. Sed vitae lacus leo. Quisque tortor risus, rhoncus et
                mauris at, elementum tincidunt nisl. Curabitur sit amet vestibulum ipsum. Sed lorem ante,
                consectetur ut libero id, tristique elementum arcu. Mauris aliquet magna leo, sed mattis felis
                malesuada sed. </p>}
        </div>
    )
}

export default Returns