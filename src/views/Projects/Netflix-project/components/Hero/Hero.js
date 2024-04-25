import Box from "@mui/material/Box";
/* import Button from "@mui/material/Button"; */
/* import useMediaQuery from "@mui/material/useMediaQuery"; */
import { colors } from "@mui/material";
/* import GitHubIcon from "@mui/icons-material/GitHub"; */
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { CodeBlock, paraisoDark } from "react-code-blocks";
import React from "react";
import Divider from "@mui/material/Divider";
import { MdDashboard } from "react-icons/md";
import { Card, Typography, Button } from "@mui/material";
import "leaflet/dist/leaflet.css";
import "../../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import GanttChart from "../Gantt/Gant";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Hero = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const showLineNumbers = true;
  const librariesImport = `from Bio import Entrez
  import re
  import pandas as pd  
  import argparse
  import math
  import random
  from bioservices import *
  import numpy as np`;

  const SecondPartScript = `parser = argparse.ArgumentParser(description='Retrieve biologic information from NCBI for proteomics data')
  parser.add_argument('csv_file', help='Path to the CSV file')
  args = parser.parse_args()
  
  csv_file = args.csv_file
  df = pd.read_csv(csv_file, sep='\\t')
  df = df.dropna()
  
  df = df.replace(',', '.', regex=True)`;

  const ThirdPartScript = `dictionary_df = df.to_dict('index')

  listToSplit = ['Accession']
  
  for key in dictionary_df:
      newDict = {}  
      for subkey in dictionary_df[key]:  
          if subkey in listToSplit:  
              listElemColumn = dictionary_df[key][subkey].split(';')  
              indexColumnName = 0 
              for elem in listElemColumn:  
                  indexColumnName += 1  
                  nameColumn = f'{subkey}_{indexColumnName}' 
                  elem = elem[elem.find('|') + 1: elem.find('|', elem.find('|') + 1)] 
                  newDict[nameColumn] = elem  
          else:
              pass 
      dictionary_df[key].update(newDict)  
      for elem in listToSplit:  
          dictionary_df[key].pop(elem)  
  
  df = pd.DataFrame(dictionary_df).T`;

  const FourthPartScript = `protein_list = []
  accession_list = df.index.values.tolist()
  name_list = []
  dicoOrganism = {}
  dicoProtein = {}
  dicoGroupSpecies = {}
  dicoGroupFamily = {}
  dicoFamilyProtein = {}
  for elem in accession_list:
      handle = Entrez.efetch(db="protein", id=elem, retmode='xml')
      records = Entrez.read(handle)
      nameOrganism = records[0]['GBSeq_organism'].lower().replace(' ','_')
      s = records[0]['GBSeq_taxonomy']
      stringFamily = records[0]["GBSeq_comment"]
      matchFamily = re.search(r'Belongs to the (.+?) family', stringFamily)
      if matchFamily:
          familyProtein = matchFamily.group(1)
      else:
          familyProtein = "undefined"
      genome_classification = [x.strip() for x in s.split(';')]
      specie = genome_classification[0]
      family = genome_classification[-1]
      # Split the string into a list of substrings
      nameOrganism = nameOrganism.split('_')
  
  
      # Join the first two elements of the list to get the desired substring
      nameOrganism = '_'.join(nameOrganism[:2])
      dicoOrganism[elem] = nameOrganism
      dicoGroupSpecies[elem] = specie
      dicoGroupFamily[elem] = family
      protein = records[0]['GBSeq_locus']
      dicoProtein[elem] = protein
      dicoFamilyProtein[elem] = familyProtein
      protein_list.append(protein)
  df['Protein'] = df.index.map(dicoProtein)
  df['Organism'] = df.index.map(dicoOrganism)
  df['Specie'] = df.index.map(dicoGroupSpecies)
  df['Family'] = df.index.map(dicoGroupFamily)
  df['Family Protein'] = df.index.map(dicoFamilyProtein)
  
  
  fileNameCsv = "input.csv"
  df.to_csv(fileNameCsv, sep='\\t')`;

  const FithPartScript = `def MeanColumn(dataframe , columnA, columnB, columnC, nameColumnMerge ):
    dataframe[[columnA, columnB, columnC]] = dataframe[[columnA, columnB, columnC]].astype(float)
    dataframe[nameColumnMerge] = dataframe[[columnA, columnB, columnC]].apply(lambda x: math.trunc(x.mean()), axis=1)
    listColumn_drop = [columnA,columnB,columnC]
    for elem in listColumn_drop:
      dataframe = dataframe.drop(elem, axis=1)
    return dataframe`;

  const SixthPartScript = `def sankeyChart (dataframe):
  result = {
      'nodes': [], 
      'links': []
      }

  # Add nodes to the dictionary
  for node in df['Specie'].unique():
      result['nodes'].append({'id': node, 'nodeColor': 'hsl(184, 70%, 50%)'})
  for node in df['Family'].unique():
      result['nodes'].append({'id': node, 'nodeColor': 'hsl(195, 70%, 50%)'})
  for node in df['Organism'].unique():
      result['nodes'].append({'id': node, 'nodeColor': 'hsl(36, 70%, 50%)'})
  # Add links to the dictionary
  groupedSpecie = dataframe.groupby('Specie')
  for nameSpecie, groupSpecie in groupedSpecie:
      dfDictSpecie = groupSpecie
      groupedFamily = dfDictSpecie.groupby('Family')
      for nameFamily, groupFamily in groupedFamily:
          dfDictFamily = groupFamily
          numberLinks = len(dfDictFamily)
          result['links'].append({'source': nameSpecie, 'target': nameFamily, 'value': numberLinks})
          groupedOrg = dfDictFamily.groupby('Organism')
          for nameOrga, groupOrga in groupedOrg:
              dfDictOrga = groupOrga
              numberLinksOrga = len(dfDictOrga)
              result['links'].append({'source': nameFamily, 'target': nameOrga, 'value': numberLinksOrga})


  # Convert the dictionary to JSON format
  json_result = json.dumps(result, indent=2)
  return json_result


def pcaChart (dataframe, listCondition):
  x = dataframe.loc[:, listCondition].values
  y = dataframe.loc[:,['Group']].values
  x = StandardScaler().fit_transform(x)
  pca = PCA(n_components=2)
  principalComponents = pca.fit_transform(x)
  principalDf = pd.DataFrame(data = principalComponents
           , columns = ['principal component 1', 'principal component 2'])
  finalDf = dataframe.merge(principalDf, how="cross")
  grouped = dataframe.groupby('Group')
  dataGroup = []
  for name, group in grouped:
      data = []
      name = "Group " + str(int(name))
      for index, row in finalDf.iterrows():
          x = row['principal component 1']
          y = row['principal component 2']
          d = {
                  'x': x,
                  'y': y,
              }
          data.append(d)

      json_dataGroup = {
          'id': name,
          'data': data
      }
      dataGroup.append(json_dataGroup)
  return dataGroup

def heatmapChart(dataframe, listCondition, nameColumn):
  indexListColor = 0
  dataPerCondition = []
  for index, row in dataframe.iterrows():  
      data = []
      protein = row['Protein']
      for elem in listCondition:    
          value = row[elem+'_'+ nameColumn]
          value = int(math.trunc(value*1000))
          value  /= 1000  
          if value != 0 :
              value = math.log(value)
          else:
              pass
          d = {
              'x': elem,
              'y': value
          }
          data.append(d)

      json_data = {
  'id': protein,
  'data': data
  }
      dataPerCondition.append(json_data)

  return dataPerCondition

def overviewJson(dataframe, listCondition):
  numOfProtein = dataframe.shape[0]
  unique_count = dataframe['Organism'].nunique()
  numCondition = len(listCondition)
  json_data = {
  'NumberOfProtein': numOfProtein,
  "NumberOfOrganism": unique_count,
  "NumberOfConditions" : numCondition,
  }
  return json_data

def jsonTreemap(dataframeTreemap, listCondition, nameColumn, KeyfileName):
  dataNode = []
  listColor = ["hsl(13, 70%, 50%)","hsl(3, 70%, 50%)","hsl(191, 70%, 50%)","hsl(93, 70%, 50%)"]
  indexListColor = 0
  for elem in listCondition:
      data = []
      color = listColor[indexListColor]
      for index, row in dataframeTreemap.iterrows():
          # Extract the required values
          protein = row['Protein']
          value = row[elem+'_'+ nameColumn]
          value = int(math.trunc(value*1000))
          value  /= 1000  
          
          # Create a dictionary with the required format
          d = {
              'name': protein,
              'color': color,
              'loc': value
          }
          
      # Append the dictionary to the list
          data.append(d)
      indexListColor += 1
      Data_condition = {
              'name': elem,
              "color": color,
          'children': data
          }
      dataNode.append(Data_condition)
  json_data = {
  'name': KeyfileName,
  "color": "hsl(280, 70%, 50%)",
  'children': dataNode
  }

  return json_data

def DataCircleChart (dataframeTreemap, listCondition, nameColumn):
  data = []
  for elem in listCondition:
      for index, row in dataframeTreemap.iterrows():
          protein = row['Protein']
          value = row[elem+'_'+ nameColumn]
          value = int(math.trunc(value*1000))
          value  /= 1000   # Normal
          if value != 0 :
              value = math.log(value)
          else:
              pass
          d = {
                  "id": protein,
                  "group": elem,
                  "value": value,
                  "volume": 16
          }
          data.append(d)
  return data

def DataBarChart (dataframeTreemap, listCondition, nameColumn):
  data = []
  listColor = ["hsl(13, 70%, 50%)","hsl(3, 70%, 50%)","hsl(191, 70%, 50%)","hsl(93, 70%, 50%)"]
  for elem in listCondition:
      dicoBar = {}
      dicoBar ['condition'] = elem
      for index, row in dataframeTreemap.iterrows():
          random_index = random.randint(0, len(listColor) - 1)
          protein = row['Protein']
          nameColor = str(protein+"Color")
          value = row[elem+'_'+ nameColumn]
          value = int(math.trunc(value*1000))
          value  /= 1000  
          dicoBar[protein] = value
          dicoBar[nameColor]=listColor[random_index]
      data.append(dicoBar)
  return data`;

  const WholeScript = `import pandas as pd  # importing the pandas library
  import argparse  # importing the argparse library
  
  def main():
      # creating an argument parser object
      parser = argparse.Argument(description='Split a CSV file into multiple files, one per column.')
  
      # adding a positional argument to the parser object
      parser.add_argument('csv_file', help='Path to the CSV file to be processed')
  
      # parsing the arguments
      args = parser.parse_args()
  
      # reading the CSV file using pandas
      csv_file = args.csv_file
      df = pd.read_csv(csv_file)
  
      # filling any missing values in the DataFrame with an empty string
      df = df.fillna('')
  
      # converting the DataFrame into a dictionary where each key in the dictionary corresponds to a row in the original DataFrame
      # and the value for each key is another dictionary that contains the column names and values for that row
      dictionary_df = df.to_dict('index')
  
      # defining a list of column names that should be split into multiple columns
      listToSplit = ['type','director','cast','country']
  
      # looping through each row in the dictionary
      for key in dictionary_df:
          newDict = {}  # creating a new dictionary to store the updated values for the current row
          for subkey in dictionary_df[key]:  # looping through each column in the current row
              if subkey in listToSplit:  # checking if the current column is in the list of columns to be split
                  listElemColumn = dictionary_df[key][subkey].split(',')  # splitting the values in the current column by the comma character
                  indexColumnName = 0  # initializing the index for the new column names
                  for elem in listElemColumn:  # looping through each value in the split column
                      indexColumnName += 1  # incrementing the index for the new column names
                      nameColumn = f'{subkey}_{indexColumnName}'  # creating the new column name by appending the index to the original column name
                      newDict[nameColumn] = elem  # adding the new column and value to the new dictionary
              else:
                  pass  # if the current column is not in the list of columns to be split, do nothing
          dictionary_df[key].update(newDict)  # updating the current row in the original dictionary with the new dictionary
          for elem in listToSplit:  # looping through each column in the list of columns to be split
              dictionary_df[key].pop(elem)  # removing the original column from the current row in the original dictionary
  
      # converting the modified dictionary back into a DataFrame
      df = pd.DataFrame(dictionary_df).T
  
      # printing the modified DataFrame to the console
      print(df)
  
  if  __name__ == '__main__':
      main()`;

  return (
    <Box
      sx={{
        position: "relative",
        "&::after": {
          position: "absolute",
          content: '""',
          width: "30%",
          zIndex: 1,
          top: 0,
          right: 0,
          height: "100%",
          backgroundSize: "18px 18px",
          opacity: 0.2,
        },
      }}
    >
      <Box position="relative" zIndex={2}>
        <Box marginBottom={2}>
          <Typography
            variant="h2"
            align={"center"}
            sx={{
              fontWeight: 700,
            }}
          >
            Dashboard for proteomics data
          </Typography>
        </Box>
        <Box marginBottom={4}>
          <Typography variant="h6" align={"center"} color={"textSecondary"}>
            This project is to design and to create a Dashboard for proteomics
            analysis.
            <br />
            Please note that this dashboard is currently in it's initial version
            (see in Roadmap tab), with additional features planned for future
            updates. The data used here have been randomly generated for
            proteins, organisms and abundance. They are not representative of
            any actual biological processes.
            <br />
          </Typography>
        </Box>
        <Box
          marginBottom={{ xs: 4, sm: 6, md: 8 }}
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent={"center"}
          alignItems={{ xs: "center", sm: "center" }}
        >
          <Box
            component={Button}
            variant="contained"
            color="primary"
            size="large"
            startIcon={<MdDashboard />}
            href="/Proteomics-visualizer"
          >
            View Dashboard
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Tabs value={value} onChange={handleChange} centered color="primary">
            <Tab label="Notebook" {...a11yProps(0)} />
            <Tab label="Roadmap & Upcoming Features" {...a11yProps(2)} />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            {/* FIRST PART */}
            <Typography variant="h5" align={"center"} marginTop={4}>
              Importing Libraries
            </Typography>
            <br />
            <Typography variant="h6" align={"center"}>
              The script uses a Python 3 environment. Below we will find the
              different package needful :
              <br />
              - Pandas : A very powerfult package to manipulate, to filter and
              to sort data
              <br />
              - Biopyhton: A collection of Python tools for computational
              biology and bioinformatics tasks. It provides modules for parsing,
              analyzing, and manipulating biological data such as DNA, RNA, and
              protein sequences. Biopython enables tasks like sequence
              alignment, structure prediction, and phylogenetic analysis.
              <br />- Bioservices: A Python library that provides access to
              various biological databases and web services, facilitating
              automated retrieval and analysis of biological data. It offers a
              unified interface to interact with multiple online resources,
              including databases for sequence data, molecular structures, and
              biological pathways.
            </Typography>
            <br />
            <Box
              component={Card}
              bgcolor={colors.blueGrey[800]}
              padding={4}
              maxWidth={800}
              margin={"0 auto"}
              boxShadow={3}
              marginBottom={4}
            >
              <CodeBlock
                text={librariesImport}
                language="python"
                showLineNumbers={showLineNumbers}
                theme={paraisoDark}
              />
            </Box>
            <Divider>
              Retrieve biological information from NCBI - Step 1
            </Divider>
            <br />
            {/* SECOND PART */}
            <Typography variant="h5" align={"center"}>
              Load Data
            </Typography>
            <br />
            <Typography variant="h6" align={"center"}>
              The function read_csv from pandas is used here to load the csv
              file "data.csv" as argument.
            </Typography>
            <br />
            <Typography variant="h6" align={"center"}>
              Note that if there are missing values (NaN) in your dataset, they
              will be automatically replaced by zeroes. You can modify this
              behavior using or not the method fillna.
            </Typography>
            <br />
            <Typography variant="h6" align={"center"}>
              Then , we need to modify some columns. Indeed, our data use float
              separate by coma. To process the model, all the columns should
              have float type. So we need to replace all commas by dots and
              convert every column into a float.
            </Typography>
            <br />
            <Box
              component={Card}
              bgcolor={colors.blueGrey[800]}
              padding={4}
              maxWidth={800}
              margin={"0 auto"}
              boxShadow={3}
            >
              <CodeBlock
                text={SecondPartScript}
                language="python"
                showLineNumbers={showLineNumbers}
                theme={paraisoDark}
              />
            </Box>
            <br />
            {/* THIRD PART Retrieve biological informations of each proteins */}
            <Typography variant="h5" align={"center"}>
              Separate all proteics accession numbers
            </Typography>
            <br />
            <Typography variant="h6" align={"center"}>
              In the accession number columns we have multiple accession number
              not useful and able to jeopardize the recovery of biological
              informations.
            </Typography>
            <br />
            <Typography variant="h6" align={"center"}>
              To do so we will seprate the different accession jnumbers into
              multiple columns and only keep thye first accession as the main
              protein information needed. So we only keep one unique identifier
              per row for each proteins.
            </Typography>
            <br />
            <Typography variant="h6" align={"center"}>
              Then , loops through each row in the dictionary and checks if any
              of the column names in the current row are in the list of columns
              to be split.
            </Typography>
            <br />
            <Typography variant="h6" align={"center"}>
              If a column name is in the list, the script splits the values in
              that column by the comma character and creates new columns in the
              row dictionary for each value. The new column names are formed by
              appending a number to the original column name.
            </Typography>
            <br />
            <Typography variant="h6" align={"center"}>
              The script then removes the original column from the row
              dictionary and adds the new columns.
            </Typography>
            <br />
            <Box
              component={Card}
              bgcolor={colors.blueGrey[800]}
              padding={4}
              maxWidth={800}
              margin={"0 auto"}
              boxShadow={3}
            >
              <CodeBlock
                text={ThirdPartScript}
                language="python"
                showLineNumbers={showLineNumbers}
                theme={paraisoDark}
              />
            </Box>
            {/* FOURTH PART Retrieve biological informations of each proteins */}
            <Typography variant="h5" align={"center"} marginTop={2}>
              Retrieve biological information from NCBI
            </Typography>
            <br />
            <Typography variant="h6" align={"center"}>
              In the accession number columns we have multiple accession number
              not useful and able to jeopardize the recovery of biological
              informations.
            </Typography>
            <br />
            <Typography variant="h6" align={"center"}>
              To do so we will seprate the different accession jnumbers into
              multiple columns and only keep thye first accession as the main
              protein information needed. So we only keep one unique identifier
              per row for each protein.
            </Typography>
            <br />
            <Typography variant="h6" align={"center"}>
              Then , loops through each row in the dictionary and checks if any
              of the column names in the current row are in the list of columns
              to be split.
            </Typography>
            <br />
            <Typography variant="h6" align={"center"}>
              If a column name is in the list, the script splits the values in
              that column by the comma character and creates new columns in the
              row dictionary for each value. The new column names are formed by
              appending a number to the original column name.
            </Typography>
            <br />
            <Typography variant="h6" align={"center"}>
              The script then removes the original column from the row
              dictionary and adds the new columns.
            </Typography>
            <br />
            <Box
              component={Card}
              bgcolor={colors.blueGrey[800]}
              padding={4}
              maxWidth={800}
              margin={"0 auto"}
              boxShadow={3}
              marginBottom={4}
            >
              <CodeBlock
                text={FourthPartScript}
                language="python"
                showLineNumbers={showLineNumbers}
                theme={paraisoDark}
              />
            </Box>
            <Divider>Data Manipulation - Step 2</Divider>
            <Typography variant="h5" align={"center"} marginTop={2}>
              Mean of each condition and normalized conditions with the control
            </Typography>
            <br />
            <Typography variant="h6" align={"center"}>
              In biology experiments, triplicate measurements are often
              performed to enhance the reliability and robustness of the
              results.
            </Typography>
            <br />
            <Typography variant="h6" align={"center"}>
              Calculating the mean of triplicates helps mitigate the impact of
              random variability and provides a more representative estimate of
              the true value.
            </Typography>
            <br />
            <Typography variant="h6" align={"center"}>
              Normalizing triplicate measurements against a control sample
              allows for comparison between different experimental conditions
              while accounting for inherent variations in experimental setups.
              This normalization helps to remove systematic biases and ensures
              that any observed differences are attributable to the specific
              experimental factors being investigated, rather than technical
              artifacts.
            </Typography>
            <br />
            <Typography variant="h6" align={"center"}>
              Overall, combining triplicate measurements with normalization
              against a control enhances the accuracy and validity of biological
              experiments
            </Typography>
            <br />
            <Typography variant="h6" align={"center"}>
              The script then removes the original column from the row
              dictionary and adds the new columns.
            </Typography>
            <br />
            <Box
              component={Card}
              bgcolor={colors.blueGrey[800]}
              padding={4}
              maxWidth={800}
              margin={"0 auto"}
              boxShadow={3}
              marginBottom={4}
            >
              <CodeBlock
                text={FithPartScript}
                language="python"
                showLineNumbers={showLineNumbers}
                theme={paraisoDark}
              />
            </Box>
            <Typography variant="h5" align={"center"} marginTop={2}>
              Transforming CSV Data into JSON for Dynamic Chart Visualization in
              React
            </Typography>
            <br />
            <Typography variant="h5" align={"center"} marginTop={2}>
              <ul>
                <li>Sunburst chart</li>
                <li>Sankey chart</li>
                <li>PCA chart</li>
                <li>Heatmap chart</li>
                <li>Treemap chart</li>
                <li>Circle dot chart</li>
                <li>Bar chart</li>
              </ul>
            </Typography>
            <br />
            <Typography variant="h6" align={"center"}>
              The purpose of this step is to manipulate CSV data to convert it
              into a JSON format. This JSON file will serve as the data source
              for a React application, enabling the visualization of charts
              based on the CSV data.
            </Typography>
            <br />
            <Typography variant="h6" align={"center"}>
              By converting the CSV to JSON, we're facilitating the seamless
              integration of the data into the React app, allowing for dynamic
              chart rendering.
            </Typography>
            <br />
            <Typography variant="h6" align={"center"}>
              This approach ensures efficient data transfer between the backend
              (Python) and frontend (React), enabling the display of insightful
              visualizations directly from the original CSV dataset.
            </Typography>
            <br />
            <Box
              component={Card}
              bgcolor={colors.blueGrey[800]}
              padding={4}
              maxWidth={800}
              margin={"0 auto"}
              boxShadow={3}
              marginBottom={4}
            >
              <CodeBlock
                text={SixthPartScript}
                language="python"
                showLineNumbers={showLineNumbers}
                theme={paraisoDark}
              />
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div>
              <GanttChart />
            </div>
          </CustomTabPanel>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
