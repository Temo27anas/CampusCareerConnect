
import Banner from '@/components/Banner'
import Header from '../components/Header'
import ProfileCard from '@/components/ProfileCard'
import { useRouter } from 'next/router'
import { useState } from 'react'


const Profile = () => {
    const router = useRouter()
    const { account_id, account_type } = router.query
    console.log(account_id, account_type)


    const [AboutText, setAboutText] = useState("");
    const [Major, setMajor] = useState("");
    const [Minor, setMinor] = useState("");
    const [Classifications, setClassifications] = useState("");
    const [GraduationYear, setGraduationYear] = useState("");
    const [NumberOfCredits, setNumberOfCredits] = useState("");
    const [Linkedin, setLinkedin] = useState("");
    const  [Gender, setGender] = useState("")
    const [Name, setName] = useState("")
    const [City, setCity] = useState("")
    const [Country, setCountry] = useState("")
    const [BirthDate, setBirthDate] = useState("")
    const [Phone, setPhone] = useState("")
    const [Email, setEmail] = useState("")
    const [CVLink, setCVLink] = useState("")
    const [FlagByInterviwer, setFlagByInterviwer] = useState("")


    

    const loadProfile = async (id) => {
        try {
            const response = await fetch('https://apiccc.netlify.app/.netlify/functions/api/profile/' + id, {
                method: 'GET'
            });
            const json = await response.json();
            console.log(json);

            setAboutText(json.student_firstname);
            setMajor(json.student_major);
            setMinor(json.student_minor);
            setClassifications(json.student_classification);
            setGraduationYear(json.student_expectedgraduationsemester);
            setNumberOfCredits(json.student_credits);
            setLinkedin(json.student_linkedinprofile);
            setGender(json.student_gender);
            setName(json.student_firstname + " " + json.student_lastname);
            setCity(json.student_city);
            setCountry(json.student_country);
            setBirthDate(json.student_birthdate);
            setPhone(json.student_phone);
            setCVLink(json.student_cvlocation);
            setFlagByInterviwer(json.student_flagbyinterviewer);

        } catch (error) {
            console.log(error);
        }
    }


    loadProfile(account_id);


    return (
        <div>
            <Header student_Fname={Name} />
            <Banner BannerName="Profile"/>
           
            <ProfileCard account_id={account_id} AboutText= {AboutText} Major={Major} Minor={Minor} Classifications={Classifications} GraduationYear={GraduationYear}
            NumberOfCredits={NumberOfCredits} Linkedin={Linkedin} Gender={Gender} Name={Name} City={City} Country={Country} BirthDate={BirthDate} 
            Phone={Phone} Email={Email} CVLink={CVLink} FlagByInterviwer={FlagByInterviwer}  account_type={account_type}/>

        </div>
    ) 
}

export default Profile

