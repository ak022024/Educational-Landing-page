function showEnrollAlert() {
    alert('Thank you for enrolling in the Generative AI course! We will contact you with further details.');
}
function showCourse(subject) {
    let title = '';
    let description = '';

    if (subject === 'Generative AI') {
        title = 'Generative AI';
        description = 'Generative AI focuses on the creation of new data using machine learning techniques like GANs, GPT models, and more. You will learn how to create AI-generated content.';
    } else if (subject === 'Digital Marketing') {
        title = 'Digital Marketing';
        description = 'Digital Marketing course covers online marketing strategies such as SEO, SEM, social media marketing, and how to leverage analytics tools.';
    } else if (subject === 'Data Science') {
        title = 'Data Science';
        description = 'Data Science involves gathering, analyzing, and deriving insights from data. Learn Python, R, machine learning, and big data tools in this course.';
    }

    document.getElementById('courseTitle').innerText = title;
    document.getElementById('courseDescription').innerText = description;
    document.getElementById('courseDetails').style.display = 'block';
    document.getElementById('enrollForm').style.display = 'none'; // Hide the form if previously shown
}

function showEnrollForm() {
    document.getElementById('enrollForm').style.display = 'block';
}
