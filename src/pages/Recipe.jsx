import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import React from 'react';

function Recipe() {
    const [recipe, setRecipe] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');
    let params = useParams();

    const fetchDetails = async (id) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        const recipeData = await data.json();
        console.log(recipeData);
        setRecipe(recipeData);
    };

    useEffect(() => {
        fetchDetails(params.id);
        console.log(params.id);
    }, [params.id]);

    return (
        <DetailWrapper>
            <div>
                <h2>{recipe.title}</h2>
                <img src={recipe.image} alt='' />
            </div>
            <Info>
                <Button
                    className={activeTab === 'instructions' ? 'active' : ''}
                    onClick={() => setActiveTab('instructions')}
                >
                    Instructions
                </Button>
                <Button
                    className={activeTab === 'ingredients' ? 'active' : ''}
                    onClick={() => setActiveTab('ingredients')}
                >
                    Ingredients
                </Button>
                {activeTab === 'instructions' && (
                    <div>
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: recipe.summary,
                            }}
                        ></h3>
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: recipe.instructions,
                            }}
                        ></h3>
                    </div>
                )}
                {activeTab === 'ingredients' && (
                    <ul>
                        {recipe.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>
                )}
            </Info>
        </DetailWrapper>
    );
}

const DetailWrapper = styled.div`
    margin-top: 5rem;
    margin-bottom: 5rem;
    display: flex;
    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    h2 {
        margin-bottom: 2rem;
    }
    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul {
        margin-top: 2rem;
    }
`;

const Button = styled.div`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 10rem;
`;

export default Recipe;
