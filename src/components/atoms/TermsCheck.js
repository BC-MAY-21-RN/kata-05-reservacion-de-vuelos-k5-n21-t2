import React, {useState, useEffect} from 'react';
import {CheckBox} from 'react-native-elements';
import style from '../../styles/TermsCheck';

export const TermsCheck = ({title, formHook}) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    if (formHook) {
      formHook.setForm('terms', '', state.checked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  return (
    <CheckBox
      containerStyle={style.checkbox}
      title={title}
      checkedColor="purple"
      checked={state.checked}
      onPress={() => setState({checked: !state.checked})}
    />
  );
};
