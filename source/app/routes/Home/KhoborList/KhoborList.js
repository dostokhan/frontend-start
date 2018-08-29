import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import {
  khoborList,
  khoborLoading,
  fetchKhoborList,
} from 'redux/modules/khobor';


import KhoborLink from './KhoborLink/KhoborLink';


class KhoborList extends PureComponent {
  componentWillMount() {
    if (!this.props.loading && this.props.khobors.length === 0) {
      console.warn('khobor not fetched');
      this.props.fetchKhoborList();
    }
  }
  render() {
    return (
      <div>
        {
          this.props.khobors.map(khobor => (
            <KhoborLink key={khobor.id} link={khobor.link} />
          ))
        }
      </div>
    );
  }
}

KhoborList.propTypes = {
//   authorized: PropTypes.bool.isRequired,
  khobors: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,

  fetchKhoborList: PropTypes.func.isRequired,
};

const mapStateToProps = state =>
  ({
    khobors: khoborList(state),
    loading: khoborLoading(state),
  });
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchKhoborList,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(KhoborList);

// import React, { PureComponent, Fragment } from 'react';
// import styled from 'styled-components';
// import { Box } from 'grid-styled';

// import WithAuth from 'components/WithAuth/WithAuth';
// import { Row } from 'styled/Responsive';

// import {
//   noteList,
//   noteLoading,
//   fetchNoteList,
// } from 'redux/modules/note';

// import NiceDate from 'components/NiceDate/NiceDate';
// import Paragraph from 'styled/Paragraph';
// import NoteLink from './NoteLink/NoteLink';
// import NoteControls from './NoteControls/NoteControls';


// const NoteTime = styled.span`
//   font-size: .8em;
//   display: block;
//   color: ${props => props.theme.colors.tertiary};
// `;
//   // color: #001f3f;

// class NoteList extends PureComponent {
//   componentWillMount() {
//     if (!this.props.loading && this.props.notes.length === 0) {
//       console.warn('note not fetched');
//       this.props.fetchNoteList();
//     }
//   }
//   render() {
//     return (
//       <Fragment>
//         {
//           !this.props.loading && this.props.notes.length === 0 &&
//             (<Paragraph>Nothing Here</Paragraph>)
//         }
//         {
//           this.props.notes.map(n => (
//             <Row key={n.key} direction="row">
//               <Box mr="auto">
//                 <NoteTime><NiceDate time={n.date} /></NoteTime>
//                 <NoteLink link={n.link} />
//               </Box>
//               {
//                 this.props.authorized &&
//                 (
//                   <NoteControls
//                     id={n.id}
//                     published={n.published}
//                     title={n.link.title}
//                   />
//                 )
//               }
//             </Row>
//           ))
//         }
//       </Fragment>
//     );
//   }
// }


//   authorized: PropTypes.bool.isRequired,
//   notes: PropTypes.array.isRequired,
//   loading: PropTypes.bool.isRequired,

//   fetchNoteList: PropTypes.func.isRequired,
// };

// const mapStateToProps = state =>
//   ({
//     notes: noteList(state),
//     loading: noteLoading(state),
//   });
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({
//     fetchNoteList,
//   }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(NoteList));

