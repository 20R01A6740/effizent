function generateStatement({
  fullName,
  email,
  highestEducationLevel,
  fieldOfStudy,
  instituteCompleted,
  programInCanada,
  instituteInCanada,
}) {
  var letterContent = `
From

${fullName}

${email}

To

Visa Officer

High Commission of Canada

Subject: Statement of Purpose for studying in Canada

Dear Sir/Madam,

I would like to take this opportunity to introduce myself as ${fullName}, a passionate

individual with a strong interest in the field of ${fieldOfStudy}. This passion

and love for technology have led me to pursue a Master's degree in ${programInCanada} from

the ${instituteInCanada} in Canada.

I have recently completed my ${highestEducationLevel} in ${fieldOfStudy} from ${instituteCompleted}, where I

gained a solid foundation in programming languages, algorithms, and ${programInCanada}.

Throughout my undergraduate studies, I have consistently excelled in my coursework and

demonstrated a strong aptitude for problem-solving and critical thinking.

The program of study in ${programInCanada} at the ${instituteInCanada} is highly regarded

and offers a comprehensive curriculum that aligns perfectly with my academic and career

goals. The interdisciplinary nature of the program will provide me with a holistic

understanding of computer science concepts and their practical applications. Additionally,

the opportunity to work with experienced faculty members and utilize state-of-the-art facilities

will further enhance my learning experience.

Studying in Canada is a dream come true for me. Canada is known for its world-class

education system and is ranked among the top countries for quality education. The country

offers a safe and peaceful environment, excellent healthcare facilities, and a multicultural

society that promotes diversity and inclusivity. I believe that studying in Canada will not only

provide me with a high-quality education but also expose me to different cultures and

perspectives, thereby enhancing my communication and interpersonal skills.

Upon completion of my Master's degree, my goal is to become a senior software developer

in the technology industry. I am particularly interested in working on innovative projects that

push the boundaries of technology and contribute to the advancement of the field. With the

knowledge and skills gained from the program at the University of Alberta, I am confident

that I will be well-equipped to achieve this goal.

In terms of finances, I have paid 100% of the first-year tuition fees and have also obtained a

Guaranteed Investment Certificate (GIC) to cover my living expenses. Additionally, my family

is fully supportive of my education and will provide financial assistance if needed.

I assure you that if granted the opportunity to study in Canada, I will abide by all the rules

and regulations set by the Canadian government, the local authorities, and the University of

Alberta. I am committed to making the most of this opportunity and contributing positively to

the academic community.

I have attached all the necessary documents to support my visa application and kindly

request you to process it as soon as possible. I am grateful for your time and consideration

and look forward to the possibility of studying in Canada.

Sincerely,

${fullName}`;

  return letterContent;
}

module.exports = generateStatement;
