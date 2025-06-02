import aiImage from "../assets/AI.jpg";
import cloudImage from "../assets/CloudComputing.jpg";
import quantumImage from "../assets/Quantum.jpg";
import dataScienceImage from "../assets/DataScience.jpg";
import cfImage from "../assets/ComputerFundamentals.jpg";
import cyberSecurityImage from "../assets/CyberSecurity.jpg";
import roboticsImage from "../assets/Robotics.jpg";
import mernImage from "../assets/MERN.jpg";
import mlImage from "../assets/ML.jpg";


const topics = [
  {
  name: "Artificial Intelligence",
  key: "ai",
  image: aiImage,
  questions: [
    {
      question: "Which AI concept enables a system to improve its performance without being explicitly programmed?",
      options: ["Deep Learning", "Machine Learning", "Fuzzy Logic", "Symbolic AI"],
      answer: "Machine Learning"
    },
    {
      question: "Which algorithm is used in reinforcement learning to find the optimal policy?",
      options: ["K-Means", "Q-Learning", "Naive Bayes", "ID3"],
      answer: "Q-Learning"
    },
    {
      question: "In neural networks, what is the vanishing gradient problem related to?",
      options: ["Large datasets", "Too many layers", "Activation functions", "Overfitting"],
      answer: "Activation functions"
    },
    {
      question: "Which of the following is a generative AI model?",
      options: ["CNN", "RNN", "GPT", "SVM"],
      answer: "GPT"
    },
    {
      question: "What is the key difference between supervised and unsupervised learning?",
      options: ["Speed", "Dataset size", "Presence of labeled data", "Type of model"],
      answer: "Presence of labeled data"
    },
    {
      question: "Which search algorithm guarantees the shortest path in an unweighted graph?",
      options: ["DFS", "BFS", "Hill Climbing", "A*"],
      answer: "BFS"
    },
    {
      question: "What type of learning algorithm is a Self-Organizing Map (SOM)?",
      options: ["Supervised", "Reinforcement", "Unsupervised", "None of the above"],
      answer: "Unsupervised"
    },
    {
      question: "In Deep Learning, what is 'dropout' used for?",
      options: ["Increasing accuracy", "Preventing overfitting", "Speeding up training", "Improving GPU performance"],
      answer: "Preventing overfitting"
    },
    {
      question: "Which AI technique is used in AlphaGo to play Go at a superhuman level?",
      options: ["Q-Learning", "Monte Carlo Tree Search", "Naive Bayes", "Linear Regression"],
      answer: "Monte Carlo Tree Search"
    },
    {
      question: "Which of the following is NOT a valid activation function?",
      options: ["ReLU", "Sigmoid", "Tanh", "MaxPool"],
      answer: "MaxPool"
    }
  ]
},

 {
  name: "Machine Learning",
  key: "ml",
  image: mlImage,
  questions: [
    {
      question: "Which of the following techniques can be used to reduce overfitting in a machine learning model?",
      options: ["Adding more features", "Using a deeper model", "Cross-validation", "Ignoring outliers"],
      answer: "Cross-validation"
    },
    {
      question: "What is the primary difference between bagging and boosting?",
      options: [
        "Boosting uses fewer models than bagging",
        "Bagging reduces bias, boosting reduces variance",
        "Bagging trains models independently, boosting trains sequentially",
        "Bagging only works with trees"
      ],
      answer: "Bagging trains models independently, boosting trains sequentially"
    },
    {
      question: "Which of the following is **not** a kernel used in Support Vector Machines?",
      options: ["Linear", "Polynomial", "Radial Basis Function", "Sigmoid", "Fourier"],
      answer: "Fourier"
    },
    {
      question: "What does the term 'curse of dimensionality' refer to?",
      options: [
        "Too many models to choose from",
        "Exponential increase in volume with added dimensions",
        "High variance in linear regression",
        "Training data inconsistency"
      ],
      answer: "Exponential increase in volume with added dimensions"
    },
    {
      question: "Which evaluation metric is best for an imbalanced classification problem?",
      options: ["Accuracy", "Precision", "Recall", "F1 Score"],
      answer: "F1 Score"
    },
    {
      question: "Which technique is used to handle multicollinearity in linear regression?",
      options: ["Gradient Descent", "Ridge Regression", "SMOTE", "Random Forest"],
      answer: "Ridge Regression"
    },
    {
      question: "What is the role of the learning rate in gradient descent?",
      options: [
        "It decides how many layers are added",
        "It determines the size of steps toward the minimum",
        "It affects the number of epochs",
        "It is used for feature scaling"
      ],
      answer: "It determines the size of steps toward the minimum"
    },
    {
      question: "Which of the following is a feature selection technique?",
      options: ["Batch Normalization", "Backward Elimination", "Stochastic Gradient Descent", "Max Pooling"],
      answer: "Backward Elimination"
    },
    {
      question: "What does PCA (Principal Component Analysis) primarily do?",
      options: [
        "Clusters similar data points",
        "Reduces dimensionality while retaining variance",
        "Increases accuracy",
        "Applies supervised learning"
      ],
      answer: "Reduces dimensionality while retaining variance"
    },
    {
      question: "Which assumption is made by the Naive Bayes classifier?",
      options: [
        "Features are dependent on each other",
        "Features are independent given the class",
        "Linear decision boundary",
        "Equal variance across classes"
      ],
      answer: "Features are independent given the class"
    }
  ]
},
  {
  name: "Cyber Security",
  key: "cybersecurity",
  image: cyberSecurityImage,
  questions: [
    {
      question: "Which cryptographic attack attempts to find two inputs producing the same hash value?",
      options: ["Brute Force Attack", "Collision Attack", "Phishing", "Replay Attack"],
      answer: "Collision Attack"
    },
    {
      question: "What does the principle of 'least privilege' mean in cybersecurity?",
      options: [
        "Users should be given access to all systems",
        "Users are restricted from logging in frequently",
        "Users should only have access necessary for their tasks",
        "Users can modify their privileges when needed"
      ],
      answer: "Users should only have access necessary for their tasks"
    },
    {
      question: "Which port does HTTPS typically use?",
      options: ["80", "21", "22", "443"],
      answer: "443"
    },
    {
      question: "What is the primary goal of a DDoS attack?",
      options: [
        "Steal user credentials",
        "Gain unauthorized access to systems",
        "Overwhelm a service to make it unavailable",
        "Encrypt data for ransom"
      ],
      answer: "Overwhelm a service to make it unavailable"
    },
    {
      question: "Which tool is primarily used for packet sniffing and network protocol analysis?",
      options: ["Metasploit", "Wireshark", "John the Ripper", "Nmap"],
      answer: "Wireshark"
    },
    {
      question: "What does the CIA triad stand for in cybersecurity?",
      options: [
        "Control, Integrity, Access",
        "Confidentiality, Integrity, Availability",
        "Cybersecurity, Integrity, Authentication",
        "Control, Information, Authorization"
      ],
      answer: "Confidentiality, Integrity, Availability"
    },
    {
      question: "Which vulnerability allows attackers to inject malicious code into web applications?",
      options: ["Buffer Overflow", "SQL Injection", "DDoS", "ARP Spoofing"],
      answer: "SQL Injection"
    },
    {
      question: "Which type of malware locks users out of their system and demands payment?",
      options: ["Trojan", "Spyware", "Ransomware", "Rootkit"],
      answer: "Ransomware"
    },
    {
      question: "What is the main difference between symmetric and asymmetric encryption?",
      options: [
        "Symmetric uses multiple keys; asymmetric uses one key",
        "Symmetric is used for hashing; asymmetric is not",
        "Symmetric uses the same key for encryption and decryption, while asymmetric uses different keys",
        "Asymmetric is only for file encryption"
      ],
      answer: "Symmetric uses the same key for encryption and decryption, while asymmetric uses different keys"
    },
    {
      question: "What type of cyberattack involves redirecting a website’s traffic to a malicious site?",
      options: ["DNS Spoofing", "Phishing", "Keylogging", "Session Hijacking"],
      answer: "DNS Spoofing"
    }
  ]
}
,
  {
  name: "Computer Fundamentals",
  key: "computerfundamentals",
  image: cfImage,
  questions: [
    {
      question: "Which of the following is a volatile memory?",
      options: ["ROM", "SSD", "RAM", "Hard Disk"],
      answer: "RAM"
    },
    {
      question: "What does the ALU (Arithmetic Logic Unit) of a CPU do?",
      options: [
        "Stores program instructions",
        "Controls input/output operations",
        "Performs arithmetic and logical operations",
        "Manages memory addresses"
      ],
      answer: "Performs arithmetic and logical operations"
    },
    {
      question: "Which type of operating system allows multiple users to access a computer system at the same time?",
      options: ["Batch OS", "Real-time OS", "Single-user OS", "Multi-user OS"],
      answer: "Multi-user OS"
    },
    {
      question: "What is the smallest unit of data in a computer?",
      options: ["Byte", "Bit", "Word", "Nibble"],
      answer: "Bit"
    },
    {
      question: "What is the function of a device driver?",
      options: [
        "To store data on the hard drive",
        "To manage power usage",
        "To allow the OS to communicate with hardware",
        "To improve network security"
      ],
      answer: "To allow the OS to communicate with hardware"
    },
    {
      question: "What kind of memory is cache memory?",
      options: ["Permanent memory", "Volatile high-speed memory", "External memory", "ROM"],
      answer: "Volatile high-speed memory"
    },
    {
      question: "Which logic gate outputs true only when both inputs are different?",
      options: ["AND", "OR", "XOR", "NAND"],
      answer: "XOR"
    },
    {
      question: "What is the hexadecimal equivalent of the binary number 10110111?",
      options: ["B7", "97", "D3", "A1"],
      answer: "B7"
    },
    {
      question: "What is the purpose of BIOS in a computer system?",
      options: [
        "Manages system memory",
        "Provides internet access",
        "Initiates hardware during the booting process",
        "Installs the operating system"
      ],
      answer: "Initiates hardware during the booting process"
    },
    {
      question: "What type of bus connects the CPU to the main memory?",
      options: ["Data bus", "Control bus", "Address bus", "System bus"],
      answer: "System bus"
    }
  ]
}
,
  {
  name: "Robotics",
  key: "robotics",
  image: roboticsImage,
  questions: [
    {
      question: "What is the main role of an actuator in a robot?",
      options: [
        "Processing data",
        "Storing commands",
        "Producing movement",
        "Sensing environmental conditions"
      ],
      answer: "Producing movement"
    },
    {
      question: "Which algorithm is commonly used for robot path planning in a grid-based environment?",
      options: ["Naive Bayes", "Dijkstra’s Algorithm", "Gradient Descent", "Backpropagation"],
      answer: "Dijkstra’s Algorithm"
    },
    {
      question: "What type of robot mimics human motion and interaction?",
      options: ["Autonomous robot", "Humanoid robot", "Mobile robot", "Swarm robot"],
      answer: "Humanoid robot"
    },
    {
      question: "What is inverse kinematics used for in robotics?",
      options: [
        "To improve speed of motion",
        "To measure robotic battery efficiency",
        "To determine joint parameters for a desired position",
        "To enhance robotic learning"
      ],
      answer: "To determine joint parameters for a desired position"
    },
    {
      question: "Which sensor is primarily used to measure distance in robotics?",
      options: ["Gyroscope", "Accelerometer", "LIDAR", "Thermocouple"],
      answer: "LIDAR"
    },
    {
      question: "Which architecture allows a robot to make decisions based on current inputs without relying on stored knowledge?",
      options: ["Deliberative", "Reactive", "Hybrid", "Hierarchical"],
      answer: "Reactive"
    },
    {
      question: "What does SLAM stand for in robotics?",
      options: [
        "Simultaneous Localization and Mapping",
        "Servo Logic and Motion",
        "Structured Learning and Movement",
        "Single Layer Automatic Mapping"
      ],
      answer: "Simultaneous Localization and Mapping"
    },
    {
      question: "Which joint allows a robot to rotate in a circular path?",
      options: ["Prismatic joint", "Revolute joint", "Cylindrical joint", "Spherical joint"],
      answer: "Revolute joint"
    },
    {
      question: "Which law did Isaac Asimov NOT include in his original Three Laws of Robotics?",
      options: [
        "A robot must not harm a human",
        "A robot must obey orders from humans",
        "A robot must protect its own existence",
        "A robot must adapt to emotions"
      ],
      answer: "A robot must adapt to emotions"
    },
    {
      question: "Which software framework is commonly used for programming and controlling robots?",
      options: ["TensorFlow", "ROS (Robot Operating System)", "PyTorch", "MATLAB"],
      answer: "ROS (Robot Operating System)"
    }
  ]
}
,
  {
  name: "Data Science",
  key: "datascience",
  image: dataScienceImage,
  questions: [
    {
      question: "Which of the following techniques is used to reduce the dimensionality of a dataset?",
      options: ["Gradient Descent", "PCA (Principal Component Analysis)", "Random Forest", "SVM"],
      answer: "PCA (Principal Component Analysis)"
    },
    {
      question: "What is the main difference between supervised and unsupervised learning?",
      options: [
        "Supervised learning does not use labels; unsupervised does",
        "Supervised learning uses labeled data; unsupervised does not",
        "Unsupervised learning is always more accurate",
        "Supervised learning cannot be used for prediction"
      ],
      answer: "Supervised learning uses labeled data; unsupervised does not"
    },
    {
      question: "In which situation would you use a confusion matrix?",
      options: [
        "To visualize the loss function",
        "To evaluate classification performance",
        "To plot regression results",
        "To identify data anomalies"
      ],
      answer: "To evaluate classification performance"
    },
    {
      question: "What is regularization used for in machine learning models?",
      options: [
        "To improve training speed",
        "To prevent overfitting",
        "To normalize data",
        "To remove outliers"
      ],
      answer: "To prevent overfitting"
    },
    {
      question: "Which of the following metrics is best for imbalanced datasets?",
      options: ["Accuracy", "Mean Absolute Error", "Precision-Recall", "R² Score"],
      answer: "Precision-Recall"
    },
    {
      question: "What is the curse of dimensionality?",
      options: [
        "It refers to overfitting due to small dataset size",
        "It refers to performance issues due to too many irrelevant features",
        "It describes the inaccuracy of classifiers",
        "It’s the result of high bias in the model"
      ],
      answer: "It refers to performance issues due to too many irrelevant features"
    },
    {
      question: "Which algorithm is based on Bayes’ Theorem and works well with high-dimensional datasets?",
      options: ["K-Nearest Neighbors", "Naive Bayes", "Random Forest", "Logistic Regression"],
      answer: "Naive Bayes"
    },
    {
      question: "Which type of plot is best suited to visualize correlation between features?",
      options: ["Boxplot", "Scatter matrix", "Histogram", "Line chart"],
      answer: "Scatter matrix"
    },
    {
      question: "What does the 'bias-variance tradeoff' help explain in a model?",
      options: [
        "Time complexity",
        "Error due to model assumptions vs. flexibility",
        "Confusion matrix errors",
        "Clustering tendency"
      ],
      answer: "Error due to model assumptions vs. flexibility"
    },
    {
      question: "Which SQL clause is used to filter groups in aggregation?",
      options: ["WHERE", "GROUP BY", "HAVING", "ORDER BY"],
      answer: "HAVING"
    }
  ]
}
,
  {
  name: "Cloud Computing",
  key: "cloud",
  image: cloudImage,
  questions: [
    {
      question: "Which cloud service model provides only the basic infrastructure such as virtual machines and storage?",
      options: ["PaaS", "SaaS", "IaaS", "FaaS"],
      answer: "IaaS"
    },
    {
      question: "Which protocol is primarily used to manage and provision cloud resources in Infrastructure as Code (IaC)?",
      options: ["HTTPS", "SSH", "REST API", "Terraform"],
      answer: "Terraform"
    },
    {
      question: "What is a key benefit of using containers in cloud environments?",
      options: [
        "They increase the cost of deployment",
        "They require dedicated hardware",
        "They package applications with dependencies for portability",
        "They run slower than virtual machines"
      ],
      answer: "They package applications with dependencies for portability"
    },
    {
      question: "What is the role of an orchestration tool like Kubernetes in cloud computing?",
      options: [
        "Encrypting cloud storage",
        "Managing large-scale container deployment",
        "Scheduling CPU cores",
        "Creating SaaS applications"
      ],
      answer: "Managing large-scale container deployment"
    },
    {
      question: "Which of the following is a *serverless* computing platform?",
      options: ["AWS Lambda", "EC2", "Google Compute Engine", "Azure Virtual Machine"],
      answer: "AWS Lambda"
    },
    {
      question: "Which cloud deployment model offers the highest control and security?",
      options: ["Public cloud", "Hybrid cloud", "Private cloud", "Multi-cloud"],
      answer: "Private cloud"
    },
    {
      question: "What does 'cloud elasticity' refer to?",
      options: [
        "Ability to change the cloud provider anytime",
        "Automatic scaling of resources based on demand",
        "Long-term data storage capacity",
        "Durability of cloud applications"
      ],
      answer: "Automatic scaling of resources based on demand"
    },
    {
      question: "Which of the following is NOT a characteristic of cloud computing?",
      options: [
        "On-demand self-service",
        "Resource pooling",
        "Measured service",
        "Fixed resource allocation"
      ],
      answer: "Fixed resource allocation"
    },
    {
      question: "Which AWS service is used for object storage?",
      options: ["EC2", "Lambda", "S3", "DynamoDB"],
      answer: "S3"
    },
    {
      question: "What is a common security challenge in cloud computing?",
      options: [
        "Lack of internet access",
        "Limited physical storage",
        "Data breaches due to multi-tenancy",
        "Insufficient RAM"
      ],
      answer: "Data breaches due to multi-tenancy"
    }
  ]
}
,
 {
  name: "MERN Stack",
  key: "mern",
  image: mernImage,
  questions: [
    {
      question: "Which of the following best describes the role of Express.js in the MERN stack?",
      options: [
        "It is used for rendering the frontend UI",
        "It manages the NoSQL database",
        "It handles backend routing and middleware",
        "It is a templating engine"
      ],
      answer: "It handles backend routing and middleware"
    },
    {
      question: "How is state typically managed across multiple components in a React app?",
      options: [
        "By using HTML forms",
        "By passing props from parent to child",
        "By localStorage",
        "By MongoDB directly"
      ],
      answer: "By passing props from parent to child"
    },
    {
      question: "Which method is used in Mongoose to establish relationships between documents?",
      options: ["useRef()", "populate()", "map()", "join()"],
      answer: "populate()"
    },
    {
      question: "What is the correct order of the MERN stack components in a full request cycle?",
      options: [
        "MongoDB → Express → React → Node",
        "React → Node → Express → MongoDB",
        "Node → Express → MongoDB → React",
        "React → MongoDB → Express → Node"
      ],
      answer: "React → Node → Express → MongoDB"
    },
    {
      question: "Which of the following React features allows routing in single-page applications?",
      options: ["Redux", "React DOM", "React Router", "useEffect"],
      answer: "React Router"
    },
    {
      question: "Which HTTP method is used to update data in a REST API built with Express.js?",
      options: ["GET", "POST", "PUT", "OPTIONS"],
      answer: "PUT"
    },
    {
      question: "What is the purpose of middleware in Express.js?",
      options: [
        "To handle frontend styles",
        "To configure MongoDB",
        "To process requests before reaching the route handler",
        "To manage client-side rendering"
      ],
      answer: "To process requests before reaching the route handler"
    },
    {
      question: "Which hook is used to perform side effects in React components?",
      options: ["useState", "useEffect", "useCallback", "useMemo"],
      answer: "useEffect"
    },
    {
      question: "What does MongoDB store data in?",
      options: ["Tables", "Schemas", "JSON objects", "Binary trees"],
      answer: "JSON objects"
    },
    {
      question: "Which command is used to start a Node.js server?",
      options: ["npm install", "nodemon server.js", "create-react-app", "serve -p"],
      answer: "nodemon server.js"
    }
  ]
}
,
  {
  name: "Quantum Computing",
  key: "quantum",
  image: quantumImage,
  questions: [
    {
      question: "What is a qubit in quantum computing?",
      options: [
        "A classical binary bit",
        "A quantum gate",
        "A basic unit of quantum information",
        "A quantum algorithm"
      ],
      answer: "A basic unit of quantum information"
    },
    {
      question: "Which quantum property allows a qubit to exist in multiple states simultaneously?",
      options: ["Superposition", "Entanglement", "Measurement", "Decoherence"],
      answer: "Superposition"
    },
    {
      question: "What is the effect of quantum entanglement?",
      options: [
        "A qubit changes state randomly",
        "Two qubits become independent",
        "The state of one qubit determines the state of another",
        "Qubits stop functioning"
      ],
      answer: "The state of one qubit determines the state of another"
    },
    {
      question: "What happens to a qubit when it is measured?",
      options: [
        "It stays in superposition",
        "It becomes a classical bit (0 or 1)",
        "It increases in frequency",
        "It teleports"
      ],
      answer: "It becomes a classical bit (0 or 1)"
    },
    {
      question: "Which logic gate is unique to quantum computing?",
      options: ["AND", "OR", "XOR", "Hadamard"],
      answer: "Hadamard"
    },
    {
      question: "What does the Hadamard gate do to a qubit?",
      options: [
        "Flips its state from 0 to 1",
        "Applies quantum entanglement",
        "Places it in an equal superposition of 0 and 1",
        "Destroys its state"
      ],
      answer: "Places it in an equal superposition of 0 and 1"
    },
    {
      question: "What is quantum decoherence?",
      options: [
        "Qubits becoming more stable",
        "Loss of quantum behavior due to environment interaction",
        "Measuring quantum entanglement",
        "Qubits replicating their state"
      ],
      answer: "Loss of quantum behavior due to environment interaction"
    },
    {
      question: "Which algorithm demonstrates quantum speedup for searching unsorted data?",
      options: ["Grover’s Algorithm", "Shor’s Algorithm", "Dijkstra’s Algorithm", "Bellman-Ford"],
      answer: "Grover’s Algorithm"
    },
    {
      question: "What problem is Shor's Algorithm designed to solve efficiently?",
      options: [
        "Finding shortest paths",
        "Sorting arrays",
        "Factoring large integers",
        "Encrypting data"
      ],
      answer: "Factoring large integers"
    },
    {
      question: "What is the biggest challenge in building scalable quantum computers?",
      options: [
        "Lack of electricity",
        "Programming languages",
        "Maintaining qubit coherence",
        "Small user base"
      ],
      answer: "Maintaining qubit coherence"
    }
  ]
}
,
];

export default topics;