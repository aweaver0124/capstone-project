import dog from '../assets/front_page_dog.jpg'


function Landing() {
    return (
        <div id='landing-stuff-container'>
            <div id='landing-stuff'>
                <div id='landing-img-container'>
                <img id='landing-img' src={dog} alt='dog-holding-ball' height='400px'/>
                </div>
                <div id='landing-paragraph'>
                    <p>Say goodbye to keeping up with your pet's vaccinations on paper. No more digging through stacks of papers and files or calling the vet to double check their current vaccinations. Instead, say hello to VaxTrack! VaxTrack helps you manage your pet's health and wellness all online. Track their vaccines and have all of this information available to you at the click of a button!</p>
                </div>
            </div>
        </div>
    )
}

export default Landing;