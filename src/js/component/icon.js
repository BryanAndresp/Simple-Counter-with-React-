/* global FontAwesomeConfig */

/**
 * 1) First you have to import the @fortawesome/fontawesome library
*/
import fontawesome from '@fortawesome/fontawesome';
import faClock from '@fortawesome/fontawesome-free-regular/faClock';

fontawesome.config = {
    autoReplaceSvg: 'nest'

};
fontawesome.library.add(
    faClock
);
/**
 * 2) Then you have to import every icon that you will use
*/


/**
 * 3) Tell font-awesome that you want to replace your icons with SVGs (recomended for performance)
*/

/**
 * 4) Add the icons into the font-awesome library
*/


/**
 * 5) Now, you can place the icon tag anywhere you want to icon to show, for example:
 *    <i className="fas fa-check"></i>
*/