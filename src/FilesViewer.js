import { IconFolder, IconFile, IconFolderOpen } from './Icons'

export const FilesViewer = ({ files, onBack, onOpen, deleteFile }) => (
  <table class="table">
    <tbody>
      <tr className="clickable" onClick={onBack}>
        <td className="icon-row">
          <IconFolderOpen />
        </td>
        <td>...</td>
        <td></td>
      </tr>

      {files.map(({ name, directory, size }) => {
        return (
          <tr className="clickable" onClick={() => directory && onOpen(name)}>
            <td className="icon-row">
              {directory ? <IconFolder /> : <IconFile />}
            </td>
            <td>{name}</td>
            <td>
              <span className="float-end">{size}</span>
            </td>
            <td>{
              !directory &&
              <button
                onClick={() => deleteFile(name)}
                className='text-decoration-none p-0 m-0 text-danger btn btn-link'
              >
                Delete
              </button>}
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
)
