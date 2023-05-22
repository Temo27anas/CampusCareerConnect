
import Banner from '@/components/Banner'
import Header from '../components/Header'

import JobList from '@/components/JobsList'


const Jobs = () => {
    return (
        <div>
            <Header />
            <Banner BannerName="Jobs"/>
            {/* Add the round shape */}
            <JobList />
        </div>
    ) 
}

export default Jobs

