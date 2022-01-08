import { FiberManualRecord, Info } from '@mui/icons-material'
import './Widgets.css'

export default function Widgets() {

    const newsArticle = (heading, subtitle) => (
      <div className="widgetsArticle">
            <div className="widgetsArticleLeft">
                <FiberManualRecord/>
        </div>
            <div className="widgetsArticleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
        </div>
      </div>
    );
    return (
      <div className="widgets">
        <div className="widgetsHeader">
          <h2>LinkedIn News</h2>
          <Info />
        </div>

        {newsArticle(
          "Adel Alkhesh is on fire!",
          "LinkedIn clone coming along nicely"
        )}
        {newsArticle("Learn React in a week!", "How to get a job quick")}
        {newsArticle(
          "Css - Not as a hard as you think!",
          "Learn the fundamentals in a simple way"
        )}
        {newsArticle(
          "Tesla hits new highs",
          "Model S production through the roof"
        )}
      </div>
    );
}
