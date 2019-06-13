import gql from 'graphql-tag';

export const notesQuery = gql`
  query NotesQuery($search: String) {
    notes(search: $search) {
      edges {
        node {
          id
          title
          body
        }
      }
    }
  }
`;

export const createNote = gql`
  mutation NoteCreateMutation($input: NoteInputType!) {
    noteCreate(input: $input) {
      note {
        id
      }
    }
  }
`;

export const deleteNote = gql`
  mutation NoteDeleteMutation($id: ID!) {
    noteDelete(id: $id) {
      ok
    }
  }
`;
