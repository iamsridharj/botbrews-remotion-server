exports.default = {
  "scenes": [
    {
      "code": "",
      "backgroundImage": "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjB5emN5Z3kzNDA1N3E2NG5oMHFrNWMxYnJoYzJnbHVmcDR4enJubCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TNsXSdz1JHnoY/giphy.gif",
      "audio": "http://localhost:8000/audio?filePath=audio/sequence_1.mp3",
      "metadata": {
        "introTitle": "Javascript",
      }
    },
    {
      "text": "First up, arrays. Like a city skyline filled with different buildings like skyscrapers, apartments, bungalows.",
      "code": "// JavaScript arrays are like a magical city block: \n// you can have a library, a skyscraper, an ice cream parlor, \n// or even a castle. \n// They all fit perfectly in their numbered lots starting \n// from zero!",
      "audio": "http://localhost:8000/audio/?filePath=audio/sequence_2.mp3",
      "metadata": {
        "sceneTitle": "Javascript Arrays",
        "overlayGifs": {
          "bottomLeft": "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2hrbnZ1ODVncXhxb2N2dTJ6OWVoNTJtdmRiZzlncG5kamw4c3A0NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pX4qCZekYXTYQ/giphy.gif"
        }
      }
    },
    {
      "text": "An array is a list that stores multiple values in a single variable. Each building in our city skyline has its address, and so does each value in our array.",
      "code": "// JavaScript arrays are like a magical city block: \n// you can have a library, a skyscraper, an ice cream parlor, \n// or even a castle. \n// They all fit perfectly in their numbered lots starting \n// from zero!\n\nconst buildings = ['skyscraper', 'apartment', 'bungalow'];\nconsole.log(buildings); // 🚧 Check out our city skyline!",
      "audio": "http://localhost:8000/audio/?filePath=audio/sequence_3.mp3",
      "metadata": {
        "sceneTitle": "Javascript Arrays",
        "overlayGifs": {
          "bottomRight": "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDFib2Z4bHplZWY3MnQ1ZHdrMTI2ZG9odGZ1NXBndTBpMjB4em1ueiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZzSdFLYHdPBNRSSSbD/giphy.gif"
        }
      }
    },
    {
      "text": "We access them by their index, starting from zero. So at index zero, we have skyscrapers. At one, we have apartments, and so on.",
      "code": "// JavaScript arrays are like a magical city block: \n// you can have a library, a skyscraper, an ice cream parlor, \n// or even a castle. \n// They all fit perfectly in their numbered lots starting \n// from zero!\n\nconst buildings = ['skyscraper', 'apartment', 'bungalow'];\nconsole.log(buildings); // 🚧 Check out our city skyline!\nconsole.log(buildings[0]); // 🏢 skyscraper\nconsole.log(buildings[1]); // 🏠 apartment\nconsole.log(buildings[2]); // 🏡 bungalow",
      "audio": "http://localhost:8000/audio/?filePath=audio/sequence_4.mp3",
      "metadata": {
        "sceneTitle": "Retrieving Array Items",
        "overlayGifs": {
          "bottomRight": "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZng3cXRqNXQxaXBiMzBidG53bHM3Nm9ocWMxcHdhaXdsM3AxODBiMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Him4XFDqF2JTbILJU4/giphy.gif"
        }
      }
    },
    {
      "text": "Just as you count buildings, you can find the length of an array. The length property tells you how many items are in your array.",
      "code": "// JavaScript arrays are like a magical city block: \n// you can have a library, a skyscraper, an ice cream parlor, \n// or even a castle. \n// They all fit perfectly in their numbered lots starting \n// from zero!\n\nconst buildings = ['skyscraper', 'apartment', 'bungalow'];\nconsole.log(buildings); // 🚧 Check out our city skyline!\nconsole.log(buildings[0]); // 🏢 skyscraper\nconsole.log(buildings[1]); // 🏠 apartment\nconsole.log(buildings[2]); // 🏡 bungalow\nconsole.log(buildings.length); // 🏗️ 3 buildings in our skyline",
      "audio": "http://localhost:8000/audio/?filePath=audio/sequence_5.mp3",
      "metadata": {
        "sceneTitle": "Array Length",
        "overlayGifs": {
          "bottomLeft": "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnV5czRzc2Q4ajduenFycmszM2RnN2dwMGtid2Q0NHZkN2V4dnYzcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r0QJ1T917UaxzP0otK/giphy.gif"
        }
      }
    },
    {
      "text": "Arrays are versatile and can also store other data types such as integers, decimals, booleans, and more.",
      "code": "// JavaScript arrays are like a magical city block: \n// you can have a library, a skyscraper, an ice cream parlor, \n// or even a castle. \n// They all fit perfectly in their numbered lots starting \n// from zero!\n\nconst buildings = ['skyscraper', 'apartment', 'bungalow'];\nconsole.log(buildings); // 🚧 Check out our city skyline!\nconsole.log(buildings[0]); // 🏢 skyscraper\nconsole.log(buildings[1]); // 🏠 apartment\nconsole.log(buildings[2]); // 🏡 bungalow\nconsole.log(buildings.length); // 🏗️ 3 buildings in our skyline\n\nconst mixedArray = ['skyscraper', 10, true, 3.14];\nconsole.log(mixedArray); // A mixed-use district!",
      "audio": "http://localhost:8000/audio/?filePath=audio/sequence_6.mp3",
      "metadata": {
        "sceneTitle": "Flexibility of Array Storage",
        "overlayGifs": {
          "bottomRight": "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGJybjdkdDE4ang3ZGN5NTRqcGppZnNtMjQ2dDY4N3Ntc2JtaTJqOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0UhvDXg4ryCjAJ8hzA/giphy.gif"
        }
      }
    },
    {
      "text": "Now onto objects. They are like blueprints of a building's, the name, type, of building, and the number of floors.",
      "code": "// Time to switch gears! Let's talk about objects.\n// They are like blueprints of a building: \n// the name, type, and number of floors.\n\nconst building = {\n  name: 'skyscraper',\n  type: 'commercial',\n  floors: 50\n};\nconsole.log(building); // Here's our skyscraper blueprint! 🏙️",
      "audio": "http://localhost:8000/audio/?filePath=audio/sequence_7.mp3",
      "metadata": {
        "sceneTitle": "Javascript Object",
      }
    },
    {
      "text": "All this information can be stored in an object. Just as you'd look at the blueprint to understand the type of a building, you access the properties of an object using dot notation.",
      "code": "// Time to switch gears! Let's talk about objects.\n// They are like blueprints of a building: \n// the name, type, and number of floors.\n\nconst building = {\n  name: 'skyscraper',\n  type: 'commercial',\n  floors: 50\n};\nconsole.log(building); // Here's our skyscraper blueprint! 🏙️\nconsole.log(building.name); // 🏢 skyscraper\nconsole.log(building.type); // 🏢 commercial\nconsole.log(building.floors); // 50 floors up!",
      "audio": "http://localhost:8000/audio/?filePath=audio/sequence_8.mp3",
      "metadata": {
        "sceneTitle": "Dot Notation",
      }
    },
    {
      "text": "Just as you can add more floors to a skyscraper, you can change the values of an object's properties. So if we want to add more floors, we simply assign a new value.",
      "code": "// Time to switch gears! Let's talk about objects.\n// They are like blueprints of a building: \n// the name, type, and number of floors.\n\nconst building = {\n  name: 'skyscraper',\n  type: 'commercial',\n  floors: 50\n};\nconsole.log(building); // Here's our skyscraper blueprint! 🏙️\nconsole.log(building.name); // 🏢 skyscraper\nconsole.log(building.type); // 🏢 commercial\nconsole.log(building.floors); // 50 floors up!\n\nbuilding.floors = 60;\nconsole.log(building.floors); // 60 floors! Our skyscraper is growing! 🏙️",
      "audio": "http://localhost:8000/audio/?filePath=audio/sequence_9.mp3",
      "metadata": {
        "sceneTitle": "Dot Notation",
      }
    },
    {
      "text": "Now, what if we want to gather all the buildings and give our city a name? We can put arrays inside an object. This is like naming our city Code City and listing all its buildings.",
      "code": "// Time to switch gears! Let's talk about objects.\n// They are like blueprints of a building: \n// the name, type, and number of floors.\n\nconst building = {\n  name: 'skyscraper',\n  type: 'commercial',\n  floors: 50\n};\nconsole.log(building); // Here's our skyscraper blueprint! 🏙️\nconsole.log(building.name); // 🏢 skyscraper\nconsole.log(building.type); // 🏢 commercial\nconsole.log(building.floors); // 50 floors up!\n\nbuilding.floors = 60;\nconsole.log(building.floors); // 60 floors! Our skyscraper is growing! 🏙️\n\nconst city = {\n  name: 'Code City',\n  buildings: ['skyscraper', 'apartment', 'bungalow']\n};\nconsole.log(city); // Welcome to Code City! 🏙️",
      "audio": "http://localhost:8000/audio/?filePath=audio/sequence_10.mp3",
      "metadata": {
        "sceneTitle": "Assigning New Value",
      }
    },
    {
      "text": "Just as you can find a specific building in the city, you can access items inside an array within an object.",
      "code": "// Time to switch gears! Let's talk about objects.\n// They are like blueprints of a building: \n// the name, type, and number of floors.\n\nconst building = {\n  name: 'skyscraper',\n  type: 'commercial',\n  floors: 50\n};\nconsole.log(building); // Here's our skyscraper blueprint! 🏙️\nconsole.log(building.name); // 🏢 skyscraper\nconsole.log(building.type); // 🏢 commercial\nconsole.log(building.floors); // 50 floors up!\n\nbuilding.floors = 60;\nconsole.log(building.floors); // 60 floors! Our skyscraper is growing! 🏙️\n\nconst city = {\n  name: 'Code City',\n  buildings: ['skyscraper', 'apartment', 'bungalow']\n};\nconsole.log(city); // Welcome to Code City! 🏙️\nconsole.log(city.buildings[0]); // 🏢 skyscraper\nconsole.log(city.buildings[1]); // 🏠 apartment\nconsole.log(city.buildings[2]); // 🏡 bungalow",
      "audio": "http://localhost:8000/audio/?filePath=audio/sequence_11.mp3",
      "metadata": {
        "sceneTitle": "Combination of Array and Object",
      }
    }
  ]
}
