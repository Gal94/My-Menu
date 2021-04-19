import { connect } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';

import {
    NewMenuItemFormContainer,
    NewMenuItemFormDiv,
    NewMenuItemInnerDiv,
    NewMenuItemInput,
    NewMenuItemModalBG,
    NewMenuItemSubmit,
    NewMenuItemText,
    NewMenuItemTitle,
    NewMenuItemWrapper,
} from './NewMenuItem.styles';
import {
    resetMealTimeNewItem,
    toggleItemForm,
} from '../../../store/actions/UiActions';
import { fetchItems, saveMenu } from '../../../helpers/ApiCalls';
import { addToMenu } from '../../../helpers/menuHelpers';
import { updateMenu } from '../../../store/actions/profileActions';

// * New Menu Item Form
const NewMenuItem = (props) => {
    const [newItem, setNewItem] = useState('');

    const dismountModal = () => {
        setNewItem('');
        props.onCloseModal();
    };

    const onSearch = async () => {
        const { items } = await fetchItems(newItem);
        if (items.length === 0) {
            return toast.error('Could not find a matching result');
        } else if (items.length > 1) {
            return toast.error('Please search for 1 product at a time');
        }
        const newMenu = addToMenu(props.menu, props.time, items[0]);

        // * validate that changes saved to db before updating the store
        saveMenu(newMenu);
        props.onUpdateMenu(newMenu);
        dismountModal();
    };

    return (
        <NewMenuItemWrapper
            isVisible={props.time && props.showForm ? true : false}
        >
            <NewMenuItemModalBG onClick={dismountModal}></NewMenuItemModalBG>
            <NewMenuItemInnerDiv>
                <NewMenuItemFormContainer>
                    <NewMenuItemTitle>New Food</NewMenuItemTitle>
                    <NewMenuItemText>
                        Enter the food name and the serving size
                    </NewMenuItemText>
                    <NewMenuItemFormDiv>
                        <NewMenuItemInput
                            placeholder='35 grams of peanuts'
                            value={newItem}
                            onChange={(e) => setNewItem(e.target.value)}
                        />
                        <NewMenuItemSubmit onClick={onSearch}>
                            ADD
                        </NewMenuItemSubmit>
                    </NewMenuItemFormDiv>
                </NewMenuItemFormContainer>
            </NewMenuItemInnerDiv>
        </NewMenuItemWrapper>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseModal: () => {
            dispatch(resetMealTimeNewItem());
            dispatch(toggleItemForm());
        },
        onUpdateMenu: (newMenu) => dispatch(updateMenu(newMenu)),
    };
};

const mapStateToProps = (state) => {
    return {
        time: state.ui.mealTimeNewItem,
        menu: state.profile.menu,
        showForm: state.ui.showNewFoodForm,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMenuItem);
