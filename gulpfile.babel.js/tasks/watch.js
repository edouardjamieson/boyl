/*
 * @title Watch
 * @description A task to start the server and watch for changes.
 */

// Dependencies
import gulp from 'gulp';

// Tasks
import { styles } from './styles';
import { scripts } from './scripts';

// Config
import { paths } from '../config';

function watchFiles() {
  gulp.watch([paths.styles.watch], styles);
  gulp.watch([paths.scripts.watch], scripts);

  console.log('\u001b[' + 32 + 'm' + '===========================================================' + '\u001b[0m')
  console.log('\u001b[' + 32 + 'm' + 'Commencé à observer le JS & CSS dans assets.' + '\u001b[0m')
  console.log('\u001b[' + 32 + 'm' + 'Appuyez sur CTRL + C pour terminer le processus.' + '\u001b[0m')
  console.log('\u001b[' + 32 + 'm' + '===========================================================' + '\u001b[0m')
}

export const watch = watchFiles;