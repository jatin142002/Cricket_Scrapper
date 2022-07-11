import request from "request";
import cheerio from "cheerio";
import chalk from "chalk";

// feature -> request
console.log("Start Scrapping");
request(
  "https://www.espncricinfo.com/live-cricket-match-schedule-fixtures",
  (error, response, html) => {
    if (error) {
      console.error("error : ", error);
    } else {
      console.log("Status Code : ", response && response.statusCode);
      handleHTML(html);
    }
  }
);
console.log("End Scrapping");

function handleHTML(html) {
  let selectTool = cheerio.load(html);

  let dataArr1 = selectTool(
    "#main-container > div.ds-relative > div> div.ds-flex.ds-space-x-5 > div.ds-grow > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div > div > div.ds-flex.ds-px-4.ds-border-b.ds-border-line.ds-py-3 > div.ds-flex.ds-flex-col.ds-grow.ds-justify-center > span > span > a > span"
  );

    console.log(chalk.bgCyanBright("\nCURRENT CRICKET : \n"));

  
    for(let i=0 ; i<dataArr1.length ; i++)
    {
        let data = selectTool(dataArr1[i]).text();
        console.log(chalk.whiteBright((i+1)+" "+data));
    }
  
}



