document.addEventListener('DOMContentLoaded', function() {
    // Exam questions data
    const examData = {
        tfQuestions: [
            {
                question: "Frequency Domain, we first transform the image to its frequency convolution. and the output in this case is not an image, but a transformation. After performing proportional transformation, it is converted into an image which is then viewed in spatial domain.",
                correctAnswer: false,
                userAnswer: null,
                explanation: " False .  convolution : distribution ,proportional : inverse."
            },
            {
                question: "The Fourier transform simply states that the periodic signals whose area under the curve is infinite can also be represented into integrals of the sines and cosines after being multiplied by a certain weight.",
                correctAnswer: false,
                userAnswer: null,
                explanation: "False. periodic : non-periodic , infinite : finite."
            },
            {
                question: "Post-script is a programming language optimized for printing graphics and text.",
                correctAnswer: true,
                userAnswer: null,
                explanation: ""
            },
            {
                question: "Giff format is limited to total number of 256 colors, or it can be less. It is mostly used for loading the fast web pages. It also helps to makes great banner and logo for different webpage.",
                correctAnswer: false,
                userAnswer: null,
                explanation: " False. Giff : GIF"
            },
            {
                question: "PNG stands for Portable Networks Graphic. PNG supports three main image types: true color, greyscale and palette-based ('8-bit'). JPEG only supports the first two; GIF only the third (although it can fake greyscale by using a grey palette).",
                correctAnswer: true,
                userAnswer: null,
                explanation: ""
            },
            {
                question: "Bmp stands for Bitmap. BMP files are device-dependent files most frequently used in Windows systems.",
                correctAnswer: false,
                userAnswer: null,
                explanation: "False. device-dependent : device-independent."
            },
            {
                question: "XBM is monochrome and stores one bit array per line. XPM is color and stores a hot spot, the image dimension and a RGB color identified by an ASCII character.",
                correctAnswer: false,
                userAnswer: null,
                explanation: "False. bit : byte"
            },
            {
                question: "Image compression can be lossy or lossness.",
                correctAnswer: false,
                userAnswer: null,
                explanation: "False. lossness : lossless"
            },
            {
                question: "Noise means any unwanted signal. Noise arises typically during image acquisition and /or transmission.",
                correctAnswer: true,
                userAnswer: null,
                explanation: ""
            },
            {
                question: "OCR has enabled scanned documents to become more than just image files, turning into fully searchable documents with text content that is recognized by computers. With the help of OCR, people no longer need to manually retype important documents when entering them into electronic databases.",
                correctAnswer: true,
                userAnswer: null,
                explanation: ""
            },
            {
                question: "An image is captured by a sensor (such as a monochrome or color TV camera) and digitized. If the output of the camera or sensor is already in digital form, an analog-to digital converter digitizes it.",
                correctAnswer: false,
                userAnswer: null,
                explanation: "False. is already : is not already"
            },
            {
                question: "Computer vision is concerned with modeling and replicating human vision using computer software and hardware. Formally the definition of computer vision is a discipline that studies how to reconstruct, interrupt and understand a 2d scene from its 3d images in terms of the properties of the structure present in scene.",
                correctAnswer: false,
                userAnswer: null,
                explanation: "False. 2d scence : 3d scene , 3d images : 2d images."
            },
            {
                question: "Morphology is a comprehensive set of image processing operations that process images based on shapes. Morphological operations apply a structuring element to an input image, creating an output image of the different size.",
                correctAnswer: false,
                userAnswer: null,
                explanation: "False. different : same"
            },
            {
                question: "In a morphological operation, the value of each pixel in the output image is based on a comparison of the corresponding pixel in the input image with its neighbors.",
                correctAnswer: true,
                userAnswer: null,
                explanation: ""
            }
        ],
        mcQuestions: [
            {
                question: "When the input of a system is an image, and the output is also an image is done, it is called in image ........... system.",
                options: ["analysis", "processing", "pre-processing"],
                correctAnswer: 1,
                userAnswer: null,
            
            },
            {
                question: "Analog image processing is done on analog signals. It includes processing on ........ dimensional analog signals.",
                options: ["one", "two", "three"],
                correctAnswer: 1,
                userAnswer: null,
                
            },
            {
                question: "Digital image processing deals with developing a ......... system that performs operations on a digital .........",
                options: ["digital - image", "digital - signal", "analog - image", "analog - signal"],
                correctAnswer: 0,
                userAnswer: null,
            },
            {
                question: "In fact, any quantity measurable through time over space or any higher dimension can be taken as a ............ A signal could be of any dimension and could be of any form.",
                options: ["image", "signal", "information"],
                correctAnswer: 1,
                userAnswer: null,
            },
            {
                question: "Analog signals are denoted by sin waves. Y = sin(x) where x is .................",
                options: ["dependent", "independent"],
                correctAnswer: 1,
                userAnswer: null,
            },
            {
                question: "Digital signals are ........ accurate than analog signals because they are the discrete samples of an analog signal taken over some period of time. However digital signals are not subject to ...........",
                options: ["less - noise", "less - interference", "more - noise", "more - interference"],
                correctAnswer: 0,
                userAnswer: null,
            },
            {
                question: "Electromagnetic waves can be thought of as a stream of particles, where each particle is moving with the speed of ......... Each particle contains a bundle of energy. This bundle of energy is called a ..........",
                options: ["sound - electron", "light - photon", "space - waves"],
                correctAnswer: 1,
                userAnswer: null,
            },
            {
                question: "Pattern recognition is used for identifying the objects in an image and ............ in pattern. Used in computer aided diagnosis, recognition of handwriting, recognition of images etc",
                options: ["changes", "position", "orientation"],
                correctAnswer: 0,
                userAnswer: null,
            },
            {
                question: "The quality of the video depends on the number of frames/pictures per ......... and the quality of each frame being used",
                options: ["second", "minute", "hour"],
                correctAnswer: 1,
                userAnswer: null,
            },
            {
                question: "Bpp or bits per pixel denotes the number of bits per pixel. The number of different colors in an image depends on the ......... of color or bits per pixel.",
                options: ["value", "depth", "energy"],
                correctAnswer: 1,
                userAnswer: null,
            },
            {
                question: "16-bit color format: It is a color image format. It has 65,536 different colors in it. It is also known as ........ color format. 24-bit color format also known as ......... color format.",
                options: ["High - high", "High - true", "Medium - true", "Low - high"],
                correctAnswer: 1,
                userAnswer: null,
            },
            {
                question: "If we define resolution as the total number of pixels, then pixel resolution can be defined with set of two numbers. The first number the ......... of the picture, or the pixels across columns, and the second number is ........ of the picture, or the pixels across its width",
                options: ["width - height", "length - width", "height - width"],
                correctAnswer: 0,
                userAnswer: null,
            },
            {
                question: "The most common aspect ratios for videos on the web are: 16:9 (widescreen), 9:16 (vertical), and ...... (square)",
                options: ["1:1", "1:2", "2:2"],
                correctAnswer: 0,
                userAnswer: null,
            },
            {
                question: "Aspect ratio maintains a balance between the .......... of an image on the screen, means it maintains a ratio between horizontal and vertical pixels. It does not let the image to get distorted when aspect ratio is ..........",
                options: ["clearance - decreased", "appearance - increased", "accuracy - decreased"],
                correctAnswer: 1,
                userAnswer: null,
            },
            {
                question: "Spatial resolution can be defined as the .......... discernible detail in an image. Or in other way we can define spatial resolution as the number of ........... pixels values per inch",
                options: ["largest - independent", "smallest - independent", "largest - dependent"],
                correctAnswer: 1,
                userAnswer: null,
            },
            {
                question: "Pixel density or Pixels per inch is a measure of ........... resolution for different devices that includes tablets, mobile phones.",
                options: ["pixel", "spatial",""],
                correctAnswer: 1,
                userAnswer: null,
            },
            {
                question: "The higher the PPI, the ........... the quality, to more understand how it calculated.",
                options: ["higher", "lower","faster"],
                correctAnswer: 0,
                userAnswer: null,
            },
            {
                question: "When dpi refers to dots per inch, liner per inch refers to lines of dots per inch. The resolution of ............ screen is measured in lines per inch.",
                options: ["full tone", "halftone", "tone"],
                correctAnswer: 1,
                userAnswer: null,
            },
            {
                question: "The ............ the pixel resolution of a source file, the greater the detail that can be reproduced.",
                options: ["higher", "lower","slower"],
                correctAnswer: 0,
                userAnswer: null,
            },
            {
                question: "The optical zoom is achieved using the ............. of the lens of your camera. An optical zoom is actually a true zoom. The result of the optical zoom is far better than that of digital zoom.",
                options: ["replacement", "movement", "changing"],
                correctAnswer: 1,
                userAnswer: null,
            },
            {
                question: "In optical zoom, an image is magnified by the lens in such a way that the objects in the image appear to be .............. to the camera.",
                options: ["closer", "far", "clearer"],
                correctAnswer: 0,
                userAnswer: null,
            },
            {
                question: "Pixel replication: It is also known as Nearest neighbor ........... In this method, we just replicate the neighboring pixels.",
                options: ["manipulation", "interpolation", "interaction"],
                correctAnswer: 1,
                userAnswer: null,
            },
            {
                question: "During a digital zoom, the pixels got............ due to which the quality of the image is compromised",
                options: ["expand", "collapsed","pixel"],
                correctAnswer: 0,
                userAnswer: null,
            },
            {
                question: "Brightness for an image can be simply increased or decreased by simple addition or subtraction, to the image .................",
                options: ["determine", "matrix", "intensity"],
                correctAnswer: 1,
                userAnswer: null,
            },
            {
                question: "Contrast for an image can be simply explained as the difference between maximum and minimum pixel ............ in an image.",
                options: ["determine", "intensity", "matrix"],
                correctAnswer: 1,
                userAnswer: null,
            },
            {
                question: "A histogram is a graph. A graph that shows frequency of anything. Usually, histogram have bars that represent frequency of occurring of data in the whole data .........",
                options: ["representation", "set", "base"],
                correctAnswer: 1,
                userAnswer: null,
            },
            {
                question: "For the Histogram of an image, the x axis contains event whose .......... you have to count. The y axis contains ............ The different heights of bar show different .......... of occurrence of data.",
                options: ["time - time - time", "frequency - frequency - frequency", "time - frequency - frequency", "frequency - time - frequency"],
                correctAnswer: 1,
                userAnswer: null,
            },
            {
                question: " Fourier series: ........... signals can be represented into sum of sines and cosines when multiplied with a certain weight. It further states that ............ signals can be broken down into further signals with the following properties: The signals are sines and cosines, and the signals are ........... of each other. ",
                options: ["periodic - non periodic - consistent", "non periodic - periodic - harmonics", "periodic - periodic - harmonics"],
                correctAnswer: 2,
                userAnswer: null,
            }
        ],
        completionQuestions: [
            {
                text: "Since anything that conveys .......... or broadcast a .......... in physical world between two observers is a signal. That includes speech or (human voice) or an .......... as a signal.  ",
                answer: "information message image",
                userAnswer: "",
            },
            {
                text: "Since when we speak, our voice is converted to a sound wave/signal and transformed with respect to the ........ to person we are speaking to.",
                answer: "time",
                userAnswer: "",
            },
            {
                text: "In order to create a digital image, we need to convert this data into a digital form. This involves ....... and .........",
                answer: "sampling quantization",
                userAnswer: "",
                
            },
            {
                text: "The result of sampling and quantization operations for digitalizing the images, results in a ............... array or matrix of numbers which identifying the digital image ",
                answer: "two dimensional",
                userAnswer: "",
            },
            {
                text: "A signal could be an analog quantity that means it is defined with respect to the .......... It is a continuous signal ",
                answer: "time",
                userAnswer: "",
            },
            {
                text: "Digital signals are very easy to analyze. They are ............... signals ",
                answer: "discontinuous",
                userAnswer: "",
            },
            {
                text: "Digital signals: The word digital stands for ............ values and hence it means that they use specific values to represent any information.",
                answer: "discrete",
                userAnswer: "",
            },
            {
                text: "There are two main concepts that are involved in the conversion:Sampling and ................... ",
                answer: "Quantization",
                userAnswer: "",
            },
            {
                text: "Visible spectrum mainly includes seven different colors that are commonly term as ............. stands for violet, indigo, blue, green, orange, yellow and Red",
                answer: "VIBGOYR",
                userAnswer: "",
            },
            {
                text: "One of the biggest challenges in recent technologies still is to increase the vision of robots. Make robot able to see things, identify them, identify the .................... etc.",
                answer: "hurdles or obstacles",
                userAnswer: "",
            },
            {
                text: "In robots' technology; ............. detection has been done through image processing, by identifying different types of objects in the image and then calculating the distance between robot and hurdles",
                answer: "Hurdle",
                userAnswer: "",
            },
            {
                text: "Color processing includes processing of colored images and different color spaces that are used. It also involves studying transmission, storage, and ........... of these color images.",
                answer: "encoding",
                userAnswer: "",
            },
            {
                text: "Pixel is the smallest element of an image. The value of a pixel at any point corresponds to the ............ of the light photons striking at that point. Each pixel stores a value proportional to the light ............ at that particular location",
                answer: "intensity intensity",
                userAnswer: "",
            },
            {
                text: "Gray color is actually the mid-point of black and white. In the case of 8bpp, the pixel value that denotes gray color is ........ or 128bpp  (if you count from ....... , not from 0). ",
                answer: "127 1",
                userAnswer: "",
            },
            {
                text: "The size of an image depends upon three things: Number of ......, Number of ........, and Number of bits per pixel ",
                answer: "rows columns",
                userAnswer: "",
            },
            {
                text: "Image size: The formula for calculating the size is: Size of an image = ",
                answer: "rows*cols*bpp",
                userAnswer: "",
            },
            {
                text: "The binary image: contains only two-pixel values 0 and 1. Here 0 refers to ............. color and 1 refers to ......... color. It is also known as ............. ",
                answer: "black white Monochrome",
                userAnswer: "",
            },
            {
                text: "Black and white image: One of the interesting this about this binary image is that there is no gray level in it. Binary images have a format of PBM .................. ",
                answer: "Portable Bit Map",
                userAnswer: "",
            },
            {
                text: "As defined that a pixel could store a value proportional to the light intensity at that particular location. The resolution can be defined in many ways. Such as pixel ........., ........... resolution, ........... resolution, spectral resolution",
                answer: "resolution spatial temporal",
                userAnswer: "",
            },
            {
                text: "In pixel resolution, the term resolution refers to the total number of count of pixels in a digital image. If an image has M rows and N columns, then its resolution can be defined as ............ ",
                answer: "M x N",
                userAnswer: "",
            },
            {
                text: "We can calculate mega pixels of a camera using pixel resolution as:........................... ",
                answer: "rows pixels (width) × column pixels (height) / 1 million",
                userAnswer: "",
            },
            {
                text: "The size of an image can be defined by its pixel resolution as : Size = ",
                answer: "pixel resolution × bpp (bits per pixel)",
                userAnswer: "",
            },
            {
                text: "Aspect ratio is the ratio between width of an image and the height of an image. It is commonly explained as two numbers separated by a colon. This ratio differs in different ............, and in different ..............",
                answer: "images screens",
                userAnswer: "",
            },
            {
                text: "Pythagoras theorem to calculate the diagonal resolution in pixels is: c = √(a² + b²) Where a and b are the ........... and .......... resolutions in pixel and c is the diagonal ............. in pixels.",
                answer: "height width resolution",
                userAnswer: "",
            },
            {
                text: "The higher the ........ of the printer, the higher is the quality of the printed document or image on paper. Usually some of the laser printers have ........... of 300 and some have 600 or more.",
                answer: "dpi dpi",
                userAnswer: "",
            },
            {
                text: "Zooming simply means enlarging a picture in a sense that the details in the image became more ......... and clearer",
                answer: "visible",
                userAnswer: "",
            },
            {
                text: "Zooming an image has many wide applications ranging from zooming through a ......... lens, to zoom an image on ......... etc.",
                answer: "camera  internet",
                userAnswer: "",
            },
            {
                text: "In optical zoom the lens is physically extended to zoom or .......... an object.",
                answer: "magnify",
                userAnswer: "",
            },
            {
                text: "Digital zoom is basically image processing within a camera. During a digital zoom, the center of the image is .........., and the edges of the picture got ........ out. Due to magnified center, it ............. that the object is closer to you",
                answer: "magnified crop looks like",
                userAnswer: "",
            },
            {
                text: "In zero order hold method of digital zooming, we pick two adjacent elements from the rows respectively and then we add them and divide the result by two and place their result in between those two elements. We first do this ....... wise and then we do this .......... wise.",
                answer: "row column",
                userAnswer: "",
            },
            {
                text: "K times is one of digital zooming methods. It is one of the most perfect zooming algorithms discussed so far. K in this zooming algorithm stands for zooming ............. ",
                answer: "factor",
                userAnswer: "",
            },
            {
                text: "In histogram sliding, we just simply shift a complete histogram rightwards or leftwards. Due to shifting or sliding of histogram towards right or left, a .............. change can be seen in the image. We are going to use histogram sliding for manipulating ................",
                answer: "clear brightness",
                userAnswer: "",
            },
            {
                text: "One of the advantages of Histograms is contrast enhancement for an image. There are two methods of enhancing contrast. The first one is called Histogram .............. that increase contrast. The second one is called Histogram ........... that enhances contrast.",
                answer: "stretching equalization",
                userAnswer: "",
            }
        ]
    };

    // Initialize the exam
    function initExam() {
        console.log("Initializing exam..."); // Debug log
        
        // Reset answers on page load
        resetAnswers();
        
        // Set up navigation buttons
        document.getElementById('tf-btn').addEventListener('click', () => showSection('tf'));
        document.getElementById('mcq-btn').addEventListener('click', () => showSection('mcq'));
        document.getElementById('complete-btn').addEventListener('click', () => showSection('complete'));
        
        // Set up section submit buttons
        document.querySelectorAll('.submit-section-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const section = e.target.dataset.section;
                submitSection(section);
            });
        });

        // Set up intersection observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all question cards
        document.querySelectorAll('.question-card').forEach(card => {
            observer.observe(card);
        });
        
        // Show initial section
        showSection('tf');
    }

    function showSection(section) {
        console.log(`Showing section: ${section}`); // Debug log
        
        // Hide all sections
        document.querySelectorAll('.section').forEach(s => {
            s.style.display = 'none';
        });

        // Show selected section
        const selectedSection = document.getElementById(`${section}-section`);
        selectedSection.style.display = 'block';

        // Update active button styles
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('ring-2', 'ring-offset-2', 'ring-slate-800');
        });
        document.getElementById(`${section}-btn`).classList.add('ring-2', 'ring-offset-2', 'ring-slate-800');

        // Render the section if not already rendered
        if (section === 'tf' && !document.getElementById('tf-questions').children.length) {
            console.log("Rendering TF questions..."); // Debug log
            renderTFQuestions();
        } else if (section === 'mcq' && !document.getElementById('mcq-questions').children.length) {
            console.log("Rendering MCQ questions..."); // Debug log
            renderMCQuestions();
        } else if (section === 'complete' && !document.getElementById('complete-questions').children.length) {
            console.log("Rendering Completion questions..."); // Debug log
            renderCompletionQuestions();
        }
    }

    function renderTFQuestions() {
        console.log("Starting to render TF questions..."); // Debug log
        const container = document.getElementById('tf-questions');
        container.innerHTML = '';
        
        examData.tfQuestions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-indigo-100 transform hover:-translate-y-0.5';
            questionDiv.innerHTML = `
                <p class="text-gray-900 mb-4 text-md">${index + 1}. ${q.question}</p>
                <div class="space-y-3">
                    <label class="flex items-center space-x-3 cursor-pointer group">
                        <input type="radio" name="tf-${index}" value="true" 
                            class="w-5 h-5 border-2 border-gray-300 rounded-full cursor-pointer"
                            ${q.userAnswer === true ? 'checked' : ''}>
                        <span class="text-gray-900">True</span>
                    </label>
                    <label class="flex items-center space-x-3 cursor-pointer group">
                        <input type="radio" name="tf-${index}" value="false" 
                            class="w-5 h-5 border-2 border-gray-300 rounded-full cursor-pointer"
                            ${q.userAnswer === false ? 'checked' : ''}>
                        <span class="text-gray-900">False</span>
                    </label>
                </div>
                <div id="tf-result-${index}" class="mt-4 hidden">
                    <!-- Results will be shown here after submission -->
                </div>
            `;
            
            const radioButtons = questionDiv.querySelectorAll('input[type="radio"]');
            radioButtons.forEach(radio => {
                radio.addEventListener('change', (e) => {
                    q.userAnswer = e.target.value === 'true';
                    saveAnswers();
                });
            });
            
            container.appendChild(questionDiv);
        });
        console.log("Finished rendering TF questions"); // Debug log
    }

    function renderMCQuestions() {
        console.log("Starting to render MCQ questions..."); // Debug log
        const container = document.getElementById('mcq-questions');
        container.innerHTML = '';
        
        examData.mcQuestions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-teal-100 transform hover:-translate-y-0.5';
            questionDiv.innerHTML = `
                <p class=" text-gray-900 mb-4 text-md">${index + 1}. ${q.question}</p>
                <div class="space-y-3">
                    ${q.options.map((option, optIndex) => `
                        <label class="flex items-center space-x-3 cursor-pointer group">
                            <input type="radio" name="mc-${index}" value="${optIndex}" 
                                class="w-5 h-5 border-2 border-gray-300 rounded-full cursor-pointer"
                                ${q.userAnswer === optIndex ? 'checked' : ''}>
                            <span class="text-gray-900">${option}</span>
                        </label>
                    `).join('')}
                </div>
                <div id="mcq-result-${index}" class="mt-4 hidden">
                    <!-- Results will be shown here after submission -->
                </div>
            `;
            
            const radioButtons = questionDiv.querySelectorAll('input[type="radio"]');
            radioButtons.forEach(radio => {
                radio.addEventListener('change', (e) => {
                    q.userAnswer = parseInt(e.target.value);
                    saveAnswers();
                });
            });
            
            container.appendChild(questionDiv);
        });
        console.log("Finished rendering MCQ questions"); // Debug log
    }

    function renderCompletionQuestions() {
        console.log("Starting to render Completion questions..."); // Debug log
        const container = document.getElementById('complete-questions');
        container.innerHTML = '';
        
        let questionNumber = 1;
        examData.completionQuestions.forEach((q, index) => {
            if (q.answer === "") return; // Skip complete statements
            
            const questionDiv = document.createElement('div');
            questionDiv.className = 'bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-indigo-100 transform hover:-translate-y-0.5';
            questionDiv.innerHTML = `
                <p class=" text-gray-900 mb-4 text-md">${questionNumber}. ${q.text}</p>
                <input type="text" 
                    class="w-full p-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-all duration-200 text-gray-900 placeholder-gray-400 bg-white"
                    value="${q.userAnswer || ''}"
                    placeholder="Type your answer here..."
                    onchange="this.value = this.value.trim()">
                 <div id="complete-result-${index}" class="mt-4 hidden">
                    <!-- Results will be shown here after submission -->
                 </div>
            `;
            
            const input = questionDiv.querySelector('input');
            input.addEventListener('input', (e) => {
                q.userAnswer = e.target.value;
                saveAnswers();
            });
            
            container.appendChild(questionDiv);
            questionNumber++;
        });
        console.log("Finished rendering Completion questions"); // Debug log
    }

    function submitSection(section) {
        let score = 0;
        let total = 0;

        if (section === 'tf') {
            examData.tfQuestions.forEach((q, index) => {
                const isCorrect = q.userAnswer === q.correctAnswer;
                if (isCorrect) score++;
                total++;
                
                const resultDiv = document.getElementById(`tf-result-${index}`);
                resultDiv.classList.remove('hidden');
                resultDiv.innerHTML = `
                    <div class="p-4 rounded-xl ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}">
                        <p class="font-medium text-gray-900">Correct answer: ${q.correctAnswer ? 'True' : 'False'}</p>
                        <p class="mt-2 text-gray-700">${q.explanation}</p>
                    </div>
                `;
            });
        } else if (section === 'mcq') {
            examData.mcQuestions.forEach((q, index) => {
                const isCorrect = q.userAnswer === q.correctAnswer;
                if (isCorrect) score++;
                total++;
                
                const resultDiv = document.getElementById(`mcq-result-${index}`);
                resultDiv.classList.remove('hidden');
                resultDiv.innerHTML = `
                    <div class="p-4 rounded-xl ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}">
                        <p class="font-medium text-gray-900">Correct answer: ${q.options[q.correctAnswer]}</p>
                        
                    </div>
                `;
            });
        } else if (section === 'complete') {
            let questionNumber = 1;
            examData.completionQuestions.forEach((q, index) => {
                if (q.answer === "") return;
                
                const isCorrect = q.userAnswer && q.userAnswer.toLowerCase() === q.answer.toLowerCase();
                if (isCorrect) score++;
                total++;
                
                const resultDiv = document.getElementById(`complete-result-${index}`);
                resultDiv.classList.remove('hidden');
                resultDiv.innerHTML = `
                    <div class="p-4 rounded-xl ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}">
                        <p class="font-medium text-gray-900">Correct answer: ${q.answer}</p>
                    </div>
                `;
                questionNumber++;
            });
        }

        // Show section score with SweetAlert2
        const percentage = (score / total) * 100;
        let title = '';
        let icon = '';
        
        if (percentage >= 90) {
            title = 'Excellent!';
            icon = 'success';
        } else if (percentage >= 80) {
            title = 'Very Good!';
            icon = 'success';
        } else if (percentage >= 70) {
            title = 'Good!';
            icon = 'success';
        } else if (percentage >= 60) {
            title = 'Satisfactory';
            icon = 'warning';
        } else {
            title = 'Needs Improvement';
            icon = 'error';
        }

        Swal.fire({
            title: title,
            html: `
                <div class="text-4xl font-bold mb-4">${score}/${total}</div>
                <div class="text-xl">${percentage.toFixed(1)}%</div>
            `,
            icon: icon,
            confirmButtonText: 'OK',
            confirmButtonColor: '#3085d6',
            background: '#ffffff',
            customClass: {
                popup: 'rounded-2xl',
                title: 'text-2xl font-bold',
                htmlContainer: 'text-center',
                confirmButton: 'rounded-full px-6 py-2'
            }
        });

        // Disable the submit button
        const submitBtn = document.getElementById(`${section}-section`).querySelector('.submit-section-btn');
        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
    }

    function saveAnswers() {
        localStorage.setItem('examAnswers', JSON.stringify({
            tf: examData.tfQuestions.map(q => q.userAnswer),
            mc: examData.mcQuestions.map(q => q.userAnswer),
            complete: examData.completionQuestions.map(q => q.userAnswer)
        }));
    }

    function loadSavedAnswers() {
        const saved = localStorage.getItem('examAnswers');
        if (saved) {
            const answers = JSON.parse(saved);
            examData.tfQuestions.forEach((q, i) => q.userAnswer = answers.tf[i]);
            examData.mcQuestions.forEach((q, i) => q.userAnswer = answers.mc[i]);
            examData.completionQuestions.forEach((q, i) => q.userAnswer = answers.complete[i]);
        }
    }

    // Add function to reset answers
    function resetAnswers() {
        examData.tfQuestions.forEach(q => q.userAnswer = null);
        examData.mcQuestions.forEach(q => q.userAnswer = null);
        examData.completionQuestions.forEach(q => q.userAnswer = null);
        localStorage.removeItem('examAnswers');
    }

    // Initialize the exam when the page loads
    initExam();
});  
