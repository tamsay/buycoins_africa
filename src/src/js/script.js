let displayMobileDropdown=(()=>{
    let toggler = document.querySelector('.toggler')
    let mobileDropdown = document.querySelector('.mobile-dropdown')
        toggler.addEventListener('click', ()=>{
            if(mobileDropdown.style.display === 'block'){
                mobileDropdown.style.display = 'none'
            }
            else{
                mobileDropdown.style.display = 'block'
            }
        })
})()

let setUserInfo=(data)=>{

    let dropdownLogin = document.querySelector('.dropdown-login')
        dropdownLogin.innerText = `${data.login}`    

    let pageRepoLink = document.querySelector('#pageRepoLink')
        pageRepoLink.setAttribute('href', `https://github.com/${data.login}?tab=repositories`)
    let headingProfileName = document.querySelector('#headingProfileName')
        headingProfileName.innerText = `${data.login}`

    let mainProfilePicture = document.querySelector('#mainProfilePicture')
        mainProfilePicture.src = `${data.avatarUrl}`
    
    let mainProfileImage = document.querySelector('.mainProfileImage')

    let emojiDiv = document.createElement('div')
        emojiDiv.className = 'emojiDiv'

    let emojiHTML = data.status.emojiHTML;
    let doc = new DOMParser().parseFromString(emojiHTML, "text/html");
    let statusEmoji = doc.body.firstChild
        statusEmoji.id = 'statusEmoji'

    emojiDiv.appendChild(statusEmoji)
       
    let statusText = document.createElement('a')
        statusText.className = 'status-text'
        statusText.innerText = `${data.status.message}`

    mainProfileImage.appendChild(emojiDiv)        
        emojiDiv.addEventListener('mouseenter', ()=>{
                emojiDiv.appendChild(statusText)
        })
        emojiDiv.addEventListener('mouseleave', ()=>{
            emojiDiv.removeChild(statusText)
        })

    let dropdownStatus = document.querySelector('.dropdown-status')

    let emojiHTMLDropdown = data.status.emojiHTML;
    let doc2 = new DOMParser().parseFromString(emojiHTMLDropdown, "text/html");
    let statusEmojiDropdown = doc2.body.firstChild
        statusEmojiDropdown.id = 'statusEmojiDropdown'

    let dropdownStatusText = document.createElement('a')
        dropdownStatusText.className = 'dropdown-status-text'
        dropdownStatusText.innerText = `${data.status.message}`

        dropdownStatus.appendChild(statusEmojiDropdown)
        dropdownStatus.appendChild(dropdownStatusText)


    let mobileStatus = document.querySelector('.mobile-status')

    let emojiHTMLMobile = data.status.emojiHTML;
    let doc3 = new DOMParser().parseFromString(emojiHTMLMobile, "text/html");
    let statusEmojiMobile = doc3.body.firstChild
        statusEmojiMobile.id = 'statusEmojiMobile'
    
    let mobileStatusText = document.createElement('a')
        mobileStatusText.className = 'mobile-status-text'
        mobileStatusText.innerText = `${data.status.message}`

        mobileStatus.appendChild(statusEmojiMobile)
        mobileStatus.appendChild(mobileStatusText)

    let mainProfileName = document.querySelector('#mainProfileName')
        mainProfileName.innerText = `${data.name}`
    
    let login = document.querySelector('#login')
        login.innerText = `${data.login}`
  
    let bio = document.querySelector('#bio')
        bio.innerText = `${data.bio}`

    let followersLink = document.querySelector('.followersLink')
        followersLink.setAttribute('href', `https://github.com/${data.login}?tab=followers`)

    let followers = document.querySelector('#followers')
        followers.innerText = `${data.followers.totalCount}`

    let followingLink = document.querySelector('.followingLink')
        followingLink.setAttribute('href', `https://github.com/${data.login}?tab=following`)
    
    let following = document.querySelector('#following')
        following.innerText = `${data.following.totalCount}`
    
    let starredRepoLink = document.querySelector('.starredRepoLink')
        starredRepoLink.setAttribute('href', `https://github.com/${data.login}?tab=stars`)

    let starredRepositories = document.querySelector('#starredRepositories')
        starredRepositories.innerText = `${data.starredRepositories.totalCount}`
    
    let country = document.querySelector('#country')
        country.innerText = `${data.location}`

    let email = document.querySelector('#email')
        email.innerText = `${data.email}`
        email.setAttribute('href', `mailto:${data.email}`)

    let twitterLink = document.querySelector('.twitterLink')
        twitterLink.setAttribute('href', `https://twitter.com/${data.twitterUsername}`)

    let twitterUsername = document.querySelector('#twitterUsername')
        twitterUsername.innerText = `@${data.twitterUsername}`

    let highlights = document.querySelector('#highlights')
        highlights.innerText = `Arctic Code Vault Contributor`
    
    let profileImgThumbnail = document.querySelector('.profile-img-thumbnail')
        profileImgThumbnail.src = `${data.avatarUrl}`

    let headingImgThumbnail = document.querySelector('.heading-img-thumbnail')
        headingImgThumbnail.src = `${data.avatarUrl}`
    
    let repoCount = document.querySelectorAll('.repo-count')
        repoCount.forEach(element=>{
            element.innerText = `${data.repositories.totalCount}` 
        })

    // Mobile Nav Section
    let mobileNavImgThumbnail = document.querySelector('.mobile-img-thumbnail')
        mobileNavImgThumbnail.src = `${data.avatarUrl}`
    
    let mobileNavProfileName = document.querySelector('#mobileNavProfileName')
        mobileNavProfileName.innerText = `${data.login}`

}

let t1 = '5f095d07ca42257d'
let t2 = 'a9da1029a5c15b630e0a6fe8'
let token = `${t1}${t2}`

let createRepoItem =(data, login)=>{

    let repoListDiv = document.querySelector('.repo-list')

    let repoItem = document.createElement('div')
        repoItem.classList = 'repo-item flex'

    let mainDetailsSection = document.createElement('div')
        mainDetailsSection.classList = 'main-details-section flex'
    
    let repoName = document.createElement('p')
        repoName.className = 'repo-name'
    let repoNameLink = document.createElement('a')
        repoNameLink.innerText = `${data.name}`
        repoNameLink.setAttribute('href', `${data.url}`)
    
    repoName.appendChild(repoNameLink)
    
    let isPrivate = document.createElement('span')
        isPrivate.className = 'private-label'
        if(data.isPrivate){
            isPrivate.innerText = 'Private'
            repoName.appendChild(isPrivate)
        }
    
    let forkDetails = document.createElement('small')
        forkDetails.className = 'fork-details'
        if(data.parent === null){
            forkDetails.style.display = `none`
        }
        else{
            let forkDetailsLink = document.createElement('a')
                forkDetailsLink.className = 'fork-link'
                forkDetailsLink.innerText = `${data.parent.nameWithOwner}`
                forkDetailsLink.setAttribute('href', `${data.parent.url}`)
            forkDetails.innerText = `Forked from `
            forkDetails.appendChild(forkDetailsLink)
        }
    
    let repoDescription = document.createElement('p')
        repoDescription.className = 'repo-description'
        if(data.description === null){
            repoDescription.style.display = 'none'
        }
        else{
        repoDescription.innerText = `${data.description}`
        }

    let repoTopics = document.createElement('div')
        repoTopics.className = 'repo-topics'
        let topicArray = data.repositoryTopics.nodes

        if(topicArray.length > 0){
            topicArray.forEach(element =>{
                let topicLink = document.createElement('a')
                    topicLink.className = 'topic-link'
                    topicLink.innerText = `${element.topic.name}`;
                    topicLink.setAttribute('href', `${element.url}`)
                    repoTopics.appendChild(topicLink)
            })
        }
        else{
            repoTopics.style.display = 'none'
        }


    let repoItemFooter = document.createElement('div')
        repoItemFooter.classList = 'repo-item-footer flex'
    
    let mainLanguage = document.createElement('div')
        mainLanguage.className = 'mainLanguage'
    
    let mainLanguageIcon = document.createElement('div')
        mainLanguageIcon.className = 'mainLanguage-icon'
        if(data.languages.nodes.length === 0){
            mainLanguage.style.display = 'none';
            mainLanguageIcon.style.margin = "0px"
        }
        else{
            mainLanguageIcon.style.backgroundColor = `${data.languages.nodes[0].color}`
        }
    
    let mainLanguageValue = document.createElement('p')
        if(data.languages.nodes.length === 0){
            mainLanguage.style.display = `none`
        }
        else{
            mainLanguageValue.innerText = `${data.languages.nodes[0].name}`
        }
    
    mainLanguage.appendChild(mainLanguageIcon)
    mainLanguage.appendChild(mainLanguageValue)


    let mitLicense = document.createElement('div')
        mitLicense.className = 'mitLicense'
    
    let mitLicenseIcon = document.createElement('i')
        mitLicenseIcon.classList = `iconify`
        mitLicenseIcon.setAttribute('data-icon', 'octicon:law-16')
    
    let mitLicenseValue = document.createElement('p')
        if(data.licenseInfo === null){
            mitLicense.style.display = 'none'
        }
        else{
            mitLicenseValue.innerText = `${data.licenseInfo.name}`;
        }
    
    mitLicense.appendChild(mitLicenseIcon)
    mitLicense.appendChild(mitLicenseValue)


    let starredInList = document.createElement('div')
        starredInList.className = 'starredInList'
    
    let starredInListLink = document.createElement('a')
    
    let starredInListIcon = document.createElement('i')
        starredInListIcon.classList = 'far fa-star'

        if(data.stargazerCount === 0){
            starredInList.style.display = 'none'
        }
        else{
            let starredValue = document.createElement('span')
            starredValue.innerText = `${data.stargazerCount}`;
            starredInListLink.setAttribute('href', `https://github.com/${login}/${data.name}/stargazers`)
            
            starredInListLink.appendChild(starredInListIcon)
            starredInListLink.appendChild(starredValue)
        }

    starredInList.appendChild(starredInListLink)

    let forkedInList = document.createElement('div')
        forkedInList.className = 'forkedInList'
    
    let forkedInListLink = document.createElement('a')
        forkedInListLink.className = 'flex'
        
    let forkedInListIcon = document.createElement('i')
        forkedInListIcon.className = 'iconify'
        forkedInListIcon.setAttribute('data-icon', 'tabler:git-fork')
    
    let forkedInListValue = document.createElement('p')
        if((data.forkCount === 0) && (data.parent === null)){
            forkedInList.style.display = 'none'
        }
        else{

            if((data.parent !== null)){
                forkedInListValue.innerText = `${data.parent.forkCount}`;
                forkedInListLink.setAttribute('href', `https://github.com/${login}/${data.name}/network/members`)
            }
            else if((data.parent === null) && (data.forkCount === 0)){
                forkedInList.style.display = 'none'
            }
            else{
                forkedInListValue.innerText = `${data.forkCount}`;
            }
        }
    
    forkedInList.appendChild(forkedInListLink)
    forkedInListLink.appendChild(forkedInListIcon)
    forkedInListLink.appendChild(forkedInListValue)

    let lastUpdateTime = document.createElement('small')
        lastUpdateTime.className = 'last-update-time'
        let updatedDate = getLastUpdateTime(data.pushedAt)
        lastUpdateTime.innerText = `${updatedDate}`
    
    repoItemFooter.appendChild(mainLanguage)
    repoItemFooter.appendChild(mitLicense)
    repoItemFooter.appendChild(starredInList)
    repoItemFooter.appendChild(forkedInList)
    repoItemFooter.appendChild(lastUpdateTime)
    
    mainDetailsSection.appendChild(repoName)
    mainDetailsSection.appendChild(forkDetails)
    mainDetailsSection.appendChild(repoDescription)
    mainDetailsSection.appendChild(repoTopics)
    mainDetailsSection.appendChild(repoItemFooter)
    
    let starredSection = document.createElement('div')
        starredSection.className = 'starredSection'
    
    let starButton = document.createElement('button');
    
    let btnImage = document.createElement('img')
        btnImage.src = './assets/images/star-24.svg'
    
    let btnText = document.createElement('span')
        btnText.innerText = 'Star'
    
    starredSection.appendChild(starButton)
    starButton.appendChild(btnImage)
    starButton.appendChild(btnText)

    repoItem.appendChild(mainDetailsSection)
    repoItem.appendChild(starredSection)

    repoListDiv.appendChild(repoItem)
}


fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",  
        authorization: `token ${token}`,
      },
       
      body: JSON.stringify({query: 
        `{
            viewer{
                login
              repositories(orderBy: {field: PUSHED_AT, direction: DESC}, first: 20) {
                nodes {
                  forkCount
                  name
                  url
                  repositoryTopics(first: 10) {
                    nodes {
                      topic {
                        name
                      }
                      url
                    }
                  }
                  parent {
                    forkCount
                    nameWithOwner
                    url
                  }
                  stargazerCount
                  languages(first: 1, orderBy: {field: SIZE, direction: DESC}) {
                    nodes {
                      color
                      name
                    }
                  }
                  licenseInfo {
                    name
                  }
                  description
                  pushedAt
                  isPrivate
                }
                totalCount
              }
              bio
              avatarUrl
              email
              followers {
                totalCount
              }
              following {
                totalCount
              }
              name
              twitterUsername
              status {
                emojiHTML
                message
              }
              location
              starredRepositories {
                totalCount
              }
              login
            }
          }
           `
        })
    })
      .then(res => res.json())
      .then((data)=>{
            
            setUserInfo(data.data.viewer)

            let repoArray = data.data.viewer.repositories.nodes;
            let loginValue = data.data.viewer.login

            repoArray.forEach(element => {
                createRepoItem(element, loginValue)
            });
      });


    
let getLastUpdateTime = (value) =>{
    let date = new Date()
    let inputDate = new Date(value)

    let currentTime = date.getTime()
    let lastUpdateTime = (new Date(value)).getTime()

    let diff = Math.ceil((currentTime - lastUpdateTime)/(1000))

    if(diff < 60){
        return (`Updated ${diff} seconds ago`)
    }
    else if ((diff > 60) && (diff < 3600)){
        let result = Math.ceil(diff/60)
        return (`Updated ${result} minutes ago`)
    }
    else if ((diff > 3600) && (diff < (3600*24))){
        let result = Math.ceil(diff/(3600))
        return (`Updated ${result} hours ago`)
    }
    else if ((diff > 3600*24) && (diff < (3600*24*1000))){
        let result = Math.ceil(diff/(3600*24))
            if(result <= 31){
                return (`Updated ${result} days ago`)
            }
            else{
                let updateDay = inputDate.getDate()
                let updateYear = inputDate.getUTCFullYear()
                let currentYear = date.getUTCFullYear()
                let fullDateString = inputDate.toUTCString()

                let reg = /([A-Z a-z])\w+/gi;
                let regextest = fullDateString.match(reg)
                let updateMonth = (regextest[2])

                if(currentYear === updateYear){
                    return (`Updated on ${updateMonth} ${updateDay}`)
                }
                else{
                    return (`Updated on ${updateMonth} ${updateDay} ${updateYear}`)
                }
            }
    }
}

let displayHeaderSummary =(()=>{
    let headerSummary = document.querySelector('.heading-profile-summary');
    let profileName = document.querySelector('#mainProfileName');    
    
    window.addEventListener('scroll', ()=>{
    
        if(isInViewport(profileName)){
            headerSummary.style.visibility = 'hidden'
        }
        else{
                headerSummary.style.visibility = 'visible'
        }
    })    
})()


let isInViewport=(element)=> {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


let displayDropdowns =(element)=>{ 
        let dropdownMenu = element.querySelector('ul')
    
            if (dropdownMenu.classList.contains('closed')) {
                dropdownMenu.classList.remove('closed')
                dropdownMenu.classList.add('open-dropdown')
            } 
            else {
                dropdownMenu.classList.remove('open-dropdown')
                dropdownMenu.classList.add('closed')
            }
}

let displayAddNewDropdown =(()=>{
    let addNewDropdown = document.querySelector('.addNewDropdown');
        
        addNewDropdown.addEventListener('click', ()=>{
            if(checkOpenDropdown()){
                closeOpenDropdown()
            }
            else{
                displayDropdowns(addNewDropdown)
            }
        })
})();

let displayProfileSettingsDropdown =(()=>{
    let profileSettingsDropdown = document.querySelector('.profileSettingsDropdown');
        
        profileSettingsDropdown.addEventListener('click', ()=>{
            if(checkOpenDropdown()){
                closeOpenDropdown()
            }
            else{
                displayDropdowns(profileSettingsDropdown)
            }
        })
})()

let getSelectChoice=(selectType, valueSpan, checkIcon)=>{
    // This sets 'All' as the default selection for each select option
    valueSpan.innerText = 'All'
    checkIcon.style.visibility = 'visible';


    selectType.forEach(element=>{
        element.addEventListener('click', ()=>{

            selectType.forEach(item=>{
                let icon = item.querySelector('.iconify');
                if(icon.style.visibility === 'visible'){
                    icon.style.visibility = 'hidden'
                }
            })
            let icon = element.querySelector('.iconify')
                icon.style.visibility = 'visible'
            valueSpan.innerText = `${element.innerText}`;
        })
    })
}

let displayRepoTypes=(()=>{
    let repoType = document.querySelector('.repoType');
    let repoValue = document.querySelector('.repoType .value-span')
    let repoTypes = repoType.querySelectorAll('.menu li')
    let defaultCheckIcon = repoType.querySelector('.menu li .iconify')

        repoType.addEventListener('click', ()=>{
            if(checkOpenDropdown()){
                closeOpenDropdown()
            }
            else{
                displayDropdowns(repoType)
            }
        })
       
        getSelectChoice(repoTypes, repoValue, defaultCheckIcon);
})()

let displayLanguageTypes=(()=>{
    let languageType = document.querySelector('.languageType');
    let languageValue = document.querySelector('.languageType .value-span')
    let languageTypes = languageType.querySelectorAll('.menu li')
    let defaultCheckIcon = languageType.querySelector('.menu li .iconify')

        
        languageType.addEventListener('click', ()=>{
            if(checkOpenDropdown()){
                closeOpenDropdown()
            }
            else{
                displayDropdowns(languageType)
            }
        })

        getSelectChoice(languageTypes, languageValue, defaultCheckIcon);
})()

let closeOnOutsideClick=(()=>{
    window.addEventListener('click', function(event) {
        let dropdowns = document.querySelectorAll('.dropdown')
            dropdowns.forEach(element=>{
                let dropdownItem = element.contains(event.target);
    
                if (!dropdownItem) {

                    let menu = element.querySelector('ul')

                    menu.classList.remove('open-dropdown')
                    menu.classList.add('closed')
                }
            })
    
    });
})()

let checkOpenDropdown=()=>{
    let dropdowns = document.querySelectorAll('.dropdown')
    let check;
        dropdowns.forEach(element=>{
            let listGroup = element.querySelector('ul')
            if(listGroup.classList.contains('open-dropdown')){  
                check = true;
            }
        })
        return check;
}

let closeOpenDropdown=()=>{
    let dropdown = document.querySelector('.open-dropdown')
    dropdown.classList.remove('open-dropdown')
    dropdown.classList.add('closed')
}
