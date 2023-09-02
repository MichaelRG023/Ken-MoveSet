



function FightingMoves(){

    function handleSubmit(e){
        e.preventDefault();
        console.log( 'You clicked submit')
    }
    

    return (
        
     <form onSubmit={handleSubmit}>
        <button type="submit">Classic </button>
        <button>  Modern </button>
     </form>
        
    );   
}





export default FightingMoves;