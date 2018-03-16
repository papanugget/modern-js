console.log('github.js  connected');

class GitHub {
    constructor(){
        this.client_id = 'bd03f9ee4a38cbaa5d52';
        this.client_secret = 'a15fc78508af5eec561e9fb4bcdc7983809af40c';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        
        return {
            profile,
            repos
        }
    }
}