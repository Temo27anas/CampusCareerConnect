
import Banner from '@/components/Banner'
import Header from '../components/Header'

import JobList from '@/components/JobsList'
import ApplicationsList from '@/components/ApplicationsList'


const Jobs = () => {
    return (
        <div>
            <Header />
            <Banner BannerName="Applications"/>
            {/* Add the round shape */}
            <ApplicationsList />
        
        </div>
    ) 
}

export default Jobs

